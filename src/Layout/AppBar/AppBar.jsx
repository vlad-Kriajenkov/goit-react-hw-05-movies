import { Container, Nav, Link, WrapperInput } from './AppBar.stuled';
import { InputSerchFilm } from 'components';
import Logo from 'assets/images/Logo/Logo.svg';

const AppBar = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src={Logo} alt="Saint Stream" loading="lazy" />
        </Link>
      </Nav>
      <WrapperInput>
        <InputSerchFilm />
      </WrapperInput>
    </Container>
  );
};

export default AppBar;
