import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  Nav,
  Link,
  BtnOpen,
  BtnClose,
  WrapperMenuMob,
} from './AppBar.stuled';
import { Modal, InputSerchFilm } from 'components';
import Logo from 'assets/images/Logo/Logo.svg';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const AppBar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const [targetModal, setTargetModal] = useState(false);

  const handleMenu = () => {
    setTargetModal(!targetModal);
  };

  if (isMobile) {
    return (
      <Container>
        <img src={Logo} alt="Saint Stream" />
        <BtnOpen onClick={handleMenu}>
          <MenuIcon fontSize="large" />
        </BtnOpen>

        <Modal handleBurger={targetModal}>
          <WrapperMenuMob>
            <InputSerchFilm handleMenu={handleMenu} />
            <Nav onClick={handleMenu}>
              <Link to="/"> Home</Link>
              <Link to="movies"> Movies</Link>
            </Nav>

            <BtnClose>
              <CloseIcon onClick={handleMenu} fontSize="large" />
            </BtnClose>
          </WrapperMenuMob>
        </Modal>
      </Container>
    );
  }
  return (
    <Container>
      <img src={Logo} alt="Saint Stream" />
      <Nav>
        <Link to="/"> Home</Link>
        <Link to="movies"> Movies</Link>
      </Nav>
      <InputSerchFilm />
    </Container>
  );
};

export default AppBar;
