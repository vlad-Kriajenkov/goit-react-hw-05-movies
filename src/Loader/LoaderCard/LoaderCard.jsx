import React from 'react';
import { LoaderBack } from './LoaderCard.styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
const LoaderCard = ({ cards, height = 475 }) => {
  
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <LoaderBack key={i}>
        <Skeleton height={height} />
      </LoaderBack>
    ));
};
export { LoaderCard };
