import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'service/api';
import { CardItem, CardList } from './Credits.stuled';
import StatusNotification from 'components/StatusNotification/StatusNotification';

export default function Credits() {
  const [credits, setCredits] = useState();
  const { id } = useParams();
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const axsiosCredits = async () => {
      const data = await API.getCredits(`${id}`);
      setCredits(data);
    };
    axsiosCredits();
  }, [id]);
  console.log(credits);
  return credits?.cast.length === 0 ? (
    <StatusNotification  text={'Unfortunately no information :('}/>
  ) : (
    <CardList>
      {credits?.cast.map(({ character, original_name, id, profile_path }) => (
        <CardItem key={id}>
          <Avatar
            alt={original_name}
            src={BASE_URL + profile_path}
            sx={{ width: 100, height: 100 }}
          />
          <p>{character}</p>
          <p>{original_name}</p>
        </CardItem>
      ))}
    </CardList>
  );
}
