import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  position: relative;
`;

export const WrapperInput = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  width: 15rem;
  input {
    font-size: 0.7rem;
  }
  button {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 425px) {
    width: 14rem;
    input {
      font-size: 1rem;
    }
  }
`;

export const WrapperFilmsCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(12.1%);

  font-size: 0.7rem;

  width: 14.39rem;
  height: 360px;
  overflow-y: scroll;
  padding: 8px;
  border-radius: 10px;
  background-color: #1e1e1ef3;
  @media screen and (max-width: 425px) {
    top: -20%;
    left: 50%;

    width: 14rem;
    transform: translate(-52%, 15%);
  }
`;
export const Link = styled(NavLink)`
  display: grid;
  grid-template-columns: 0.3fr 1fr;

  text-decoration: none;
  margin-bottom: 10px;
`;
export const Poster = styled.div`
  width: 2.8rem;

  border: 0.5px solid white;
  border-radius: 10px;
  span {
    height: fit-content;
    img {
      border-radius: 10px;
    }
  }
`;

export const NameFilm = styled.h2`
  font-size: 0.6rem;
  color: white;
`;
