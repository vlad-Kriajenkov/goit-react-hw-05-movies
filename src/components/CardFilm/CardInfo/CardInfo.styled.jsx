import styled from '@emotion/styled';

export const CardBox = styled.div`
  width: 41.67vw;

  padding: 0.7rem;
  border-radius: 0.4rem;
  background-color: rgb(0, 0, 0, 0.8);
  color: #ffffff;
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
  @media screen and (max-width: 425px) {
    width: auto;
    margin-top: -4px;
    border-radius: 0rem;
    background-color: rgb(0, 0, 0, 1);

  }
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;

  letter-spacing: 0.005em;

  margin-bottom: 0.3rem;
    @media screen and (max-width: 425px) {
      font-size: 1.5rem ;
    }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.5rem;
  line-height: 1.43;
  letter-spacing: 0.005em; 

  margin-bottom: 0.3rem;
    @media screen and (max-width: 425px) {
      font-size:1.1rem;
      color: #9b9b9b;
    }
`;
