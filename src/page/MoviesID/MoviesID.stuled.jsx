import styled from '@emotion/styled';

export const WrapBanner = styled.div`
  position: relative;
`;

export const NameFilm = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

export const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100px;
  background: rgb(0, 0, 0);

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 78.02%);
`;

export const WrapperStory = styled.div`
  margin-bottom: 1rem;
  h2 {
    font-size: 1.125rem;
    line-height: 1.625rem;
    letter-spacing: 0.0075rem;
  }
  p {
    font-size: 0.6rem;
    line-height: 0.7rem; 
    letter-spacing: 0.0075rem;
    color: #9ca4ab;
  }
  @media screen and (max-width:425px) {
    h2{
      font-size: 1.5rem;
      line-height: 2rem;
    }
    p{
      font-size: 1.2rem;
      line-height: 1.4rem; 
    }
  }
`;
