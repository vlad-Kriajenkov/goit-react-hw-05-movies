import React from 'react';
import { LoaderBack } from './Loader.styled';

import LoaderImg from 'assets/images/Loading/coverNotFound.png';
const Loader = ({ children, loading }) => {
  return (
    <>
      {loading ? (
        <LoaderBack>
          <img src={LoaderImg} alt="" />
        </LoaderBack>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
export { Loader };
