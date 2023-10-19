import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  position: absolute;
  z-index: 1;
  left: 0;

  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;
  background-color: #00000076;
`;

export const Nav = styled.nav`
  padding: 10px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
`;
export const WrapperInput = styled.nav`
  padding: 10px;
  margin-left: auto;
`;
