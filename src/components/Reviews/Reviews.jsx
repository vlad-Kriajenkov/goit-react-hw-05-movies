import StatusNotification from 'components/StatusNotification/StatusNotification';
import { useEffect, useState } from 'react';

import { Avatar, Container } from '@mui/material';
import * as API from 'service/api';
import css from './Reviews.module.css';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState('');

  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    try {
      const axsiosReviews = async () => {
        const responce = await API.getReviews(id);
        setReviews(responce);
      };
      axsiosReviews();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const reviewLegtnh = reviews?.results?.length;
  if (reviewLegtnh === 0) {
    return <StatusNotification text={'Not have Reviews'} />;
  }
  if (reviewLegtnh > 0) {
    return (
      <Container maxWidth="xl">
        <ul className={css.reviews__list}>
          {reviews?.results?.map(({ id, author_details, author, content }) => (
            <li key={id} className={css.reviews__item}>
              <div>
                <Avatar
                  src={BASE_URL + author_details.avatar_path}
                  sx={{ width: 70, height: 70 }}
                  className={css.reviews__avatar}
                />
                <p className={css.reviews__name}>{author}</p>
              </div>

              <div className={css.wrapperText}>
                <p className={css.reviews__text}>{content}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
};
export { Reviews };
