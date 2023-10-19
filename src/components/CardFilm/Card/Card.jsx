import { CardBackGraund } from './Card.styled';

const Card = ({ children, width, height }) => {
  return (
    <CardBackGraund width={width} height={height}>
      {children}
    </CardBackGraund>
  );
};
export { Card };
