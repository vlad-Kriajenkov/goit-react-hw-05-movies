import { CardBackGraund } from './Card.styled';

const Card = ({ children, width }) => {
  return <CardBackGraund width={width}>{children}</CardBackGraund>;
};
export { Card };
 