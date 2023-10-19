import ReactDOM from 'react-dom';
import { Blackdrop } from './Modal.styled';

const Modal = ({ children, handleBurger }) => {
  const portalDiv = document.getElementById('modal-root');
  return ReactDOM.createPortal(
    <Blackdrop className={handleBurger ? 'active' : ''}>
      <div>{children}</div>
    </Blackdrop>,
    portalDiv
  );
};

export { Modal };
