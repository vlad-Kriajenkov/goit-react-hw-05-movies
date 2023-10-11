/* Container */
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  position: absolute;
  z-index: 1;
  left: 0;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  padding: 5px 10px;

  background-color: #00000076;

  @media (max-width: 1440px) {
    grid-template-columns: 1.5fr 5fr 1fr;
  }
  @media (max-width: 425px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    padding: 10px 0px;
  }
`;

export const Nav = styled.nav`
  margin-left: 90px;
  @media screen and (max-width: 425px) {
    padding-top: 10px;
    margin-left: 0px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px 10px;
  border-radius: 4px;
  margin-right: 20px;

  color: #ffffff;
  &.active {
    background-color: #2668c3;
  }
  &.active:hover {
    color: #ffffff;
  }

  :last-child {
    margin-right: 0px;
  }
  :hover {
    color: #2668c3;
  }
`;

// Mobile
export const  BtnOpen = styled.div`
  text-align: end;
`;
export const BtnClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0px, 14px);
`;
export const WrapperMenuMob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 20px;
`;
