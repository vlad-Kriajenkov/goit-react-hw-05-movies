import styled from '@emotion/styled';

export const TitlePopularWeek = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: 0.005em;

  width: 45%;
  background-color: #3d3c3c9c;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
  box-shadow: 2px 2px 5px 0px #ffffff41;
  padding: 20px 30px;
  margin-bottom: 10px;

  color: #f9f9f9;
  @media screen and (max-width: 425px) {
    width: 75%;
  }

`;

export const NameFilm = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.005em;

  margin-bottom: 20px;
  color: #f9f9f9;
`;

export const StatFilm = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.005em;

  display: flex;
  align-items: center;

  margin-bottom: 20px;

  color: #78828a;
`;
export const ContainerCard = styled.div`
  display: flex;

  margin-right: 10px;

  background-color: #ffffff18;
  border: 1px solid #ffffff12;

  box-shadow: 2px 2px 5px 0px #ffffff41;
`;
export const Img = styled.img`
  width: 200px;
`;

export const WrapperInfo = styled.div`
  padding: 20px 10px;
`;
