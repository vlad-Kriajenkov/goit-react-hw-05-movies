import React from 'react';
import ReactDOM from 'react-dom';
import { LoadContainer } from './LoaderWeb.styled';

const LoaderWeb = ({ isLoad }) => {
  const portalDiv = document.getElementById('loader-root');
  return ReactDOM.createPortal(
    <LoadContainer>loader</LoadContainer>,
    portalDiv
  );
};

export { LoaderWeb };
