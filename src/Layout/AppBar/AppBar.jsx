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
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const [targetModal, setTargetModal] = useState(false);

  const handelMebu = () => {
    setTargetModal(!targetModal);
  };

  if (isMobile) {
    return (
      <Container>
        <img src={Logo} alt="Saint Stream" />
        <BtnOpen onClick={handelMebu}>
          <MenuIcon fontSize="large" />
        </BtnOpen>

        <Modal handleBurger={targetModal}>
          <WrapperMenuMob>
            <InputSerchFilm handelMebu={handelMebu} />
            <Nav onClick={handelMebu}>
              <Link to="/"> Home</Link>
              <Link to="movies"> Movies</Link>
            </Nav>

            <BtnClose>
              <CloseIcon onClick={handelMebu} fontSize="large"  />
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
