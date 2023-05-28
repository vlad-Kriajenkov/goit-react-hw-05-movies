/* Container */
import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  padding: 20px 0px 20px 0px;

  @media(min-width: 1300px){
    grid-template-columns: 1.5fr 5fr 1fr;
  }
`;

export const WrapperLogo = styled.div`
  margin-left: 150px;
`;

export const Nav = styled.nav`
  margin-left: 90px;

  a {
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    margin-right: 20px;

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

export const WrapperBtn = styled.div`
  margin-left: auto;
  margin-right: 150px;
`;
