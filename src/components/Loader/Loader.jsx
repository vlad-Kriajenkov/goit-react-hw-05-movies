import React from 'react';
import { LoaderBack } from './Loader.styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
const Loader = ({ cards, height = 300 }) => {
  
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <LoaderBack key={i}>
        <Skeleton height={height} />
      </LoaderBack>
    ));
};
export { Loader };
