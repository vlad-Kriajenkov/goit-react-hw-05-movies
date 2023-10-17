import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'service/api';
import {
  Title,
  CardItem,
  WrapName,
  NameActor,
  NamePerson,
} from './Credits.stuled';
import StatusNotification from 'components/StatusNotification/StatusNotification';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
const Credits = () => {
  const [credits, setCredits] = useState();
  const { id } = useParams();
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const avatarMob = '4rem';
  const avatrDesc = '2rem';
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
    ? avatarMob
    : avatrDesc;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const axsiosCredits = async () => {
      try {
        const data = await API.getCredits(`${id}`);
        setCredits(data);
      } catch (error) {
        Notify.failure('Qui timide rogat docet negare');
      }
    };
    axsiosCredits();
  }, [id]);
  console.log(credits);
  return credits?.cast.length === 0 ? (
    <StatusNotification text={'Unfortunately no information :('} />
  ) : (
    <>
      <Title>Top Cast </Title>
      <Slider {...settings}>
        {credits?.cast.map(({ character, original_name, id, profile_path }) => (
          <div key={id}>
            <CardItem>
              <Avatar
                alt={original_name}
                src={BASE_URL + profile_path}
                sx={{ width: isMobile, height: isMobile }}
              />
              <WrapName>
                <NameActor>{original_name}</NameActor>
                <NamePerson>{character}</NamePerson>
              </WrapName>
            </CardItem>
          </div>
        ))}
      </Slider>
    </>
  );
};
export { Credits };
