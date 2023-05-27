import LoginAndLogout from 'components/LoginAndLogout/LoginAndLogout';
import Logo from 'images/Logo.png';
import { Container, Nav, WrapperBtn, WrapperLogo } from './AppBar.stuled';
const { NavLink } = require('react-router-dom');

const AppBar = () => {
  return (
    <Container>
      <WrapperLogo>
        <img src={Logo} alt="Saint Stream" />
      </WrapperLogo>
      <Nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="movies"> Movies</NavLink>
      </Nav>
      <WrapperBtn>
        <LoginAndLogout />
      </WrapperBtn>
    </Container>
  );
};

export default AppBar;
