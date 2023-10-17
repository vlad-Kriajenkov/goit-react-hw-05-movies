import React from 'react';
import { CardBox, Title, Description } from './CardInfo.styled';
const CardInfo = ({ title, description, children }) => {
  return (
    <CardBox>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </CardBox>
  );
};
export { CardInfo };
