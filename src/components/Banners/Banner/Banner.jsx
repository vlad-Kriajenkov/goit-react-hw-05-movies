import React from 'react';

import { CardInfo, LazyLoadImageBanner } from 'components';
import { WrapperInfo, WrapperBanner } from './Banner.styled';

const Banner = ({
  poster_path,
  title,
  backdrop_path,
  description,
  children,
}) => {
  return (
    <WrapperBanner>
      <LazyLoadImageBanner
        poster_path={poster_path}
        title={title}
        backdrop_path={backdrop_path}
      />
      <WrapperInfo>
        <CardInfo title={title} description={description}>
          {children}
        </CardInfo>
      </WrapperInfo>
    </WrapperBanner>
  );
};

export { Banner };
