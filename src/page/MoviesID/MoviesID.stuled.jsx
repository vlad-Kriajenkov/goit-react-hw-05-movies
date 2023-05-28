import styled from '@emotion/styled';

export const ConatinerMoviesID = styled.div`
  position: reletive;
`;

export const WrapperInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(24%, -20%);

  width: 600px;

  padding: 30px;

  border-radius: 6px;

  background-color: rgb(0, 0, 0, 0.8);
  color: #ffffff;
  @media(min-width: 1300px){
    transform: translate(24%, -40%);
  }
`;

export const ImgFilm = styled.img`
  height: 100vh;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;

  letter-spacing: 0.005em;

  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;

  letter-spacing: 0.005em;
`;

export const Nav = styled.nav`
  margin-top: 10px;

  a {
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    margin-right: 20px;
    background-color: #37393c;
    color: #ffffff;
    &.active {
      background-color: #2668c3;
    }
    &.active:hover {
      color: #ffffff;
    }
  }
  a:last-child {
    margin-right: 0px;
  }
  a:hover {
    color: #2668c3;
  }
`;

 