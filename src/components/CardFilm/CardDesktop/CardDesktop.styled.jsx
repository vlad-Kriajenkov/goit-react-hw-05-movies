import styled from '@emotion/styled';

export const ContainerCard = styled.div`
  /* display: flex; */
  position: relative;
`;
export const NameFilm = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.005em;

  margin-bottom: 5px;
  color: #f9f9f9;
`;

export const StatFilm = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.005em;

  display: flex;
  align-items: center;

  color: white;
`;

export const Img = styled.img`
  /* width: 200px; */

  @media screen and (max-width: 425px) {
    /* width: 250px; */
  }
`;

export const WrapperInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #00000077;
  width: 100%;
`;
