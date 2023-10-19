import React from 'react';
import ReactDOM from 'react-dom';
import { LoadContainer } from './LoaderWeb.styled';
import { Grid } from 'react-loader-spinner';
const LoaderWeb = () => {
  const portalDiv = document.getElementById('loader-root');
  return ReactDOM.createPortal(
    <LoadContainer>
      <Grid
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadContainer>,
    portalDiv
  );
};

export { LoaderWeb };
