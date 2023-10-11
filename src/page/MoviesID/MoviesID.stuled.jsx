import styled from '@emotion/styled';

export const ContainerMoviesID = styled.div`
  position: reletive;
`;

export const WrapperInfo = styled.div`
  position: absolute;
  top: 20%;
  left: 0%;
  transform: translate(24%, 20%);

  width: 600px;

  padding: 30px;

  border-radius: 6px;

  background-color: rgb(0, 0, 0, 0.8);
  color: #ffffff;
  @media (min-width: 1300px) {
    transform: translate(24%, -20%);
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

export const WrapperBtn = styled.div`
  margin-top: 10px;

  button {
    padding: 5px 10px;
    border-radius: 4px;
    margin-right: 20px;

    background-color: #37393c;
    border: none;
    cursor: pointer;

    color: #ffffff;
    &.active {
      background-color: #2668c3;
    }
    &.active:hover {
      color: #ffffff;
    }
  }
  button:last-child {
    margin-right: 0px;
  }
  button:hover {
    color: #2668c3;
  }
`;
