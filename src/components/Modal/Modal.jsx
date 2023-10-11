import ReactDOM from 'react-dom';
import { Blackdrop } from './Modal.styled'
const portalDiv = document.getElementById('modal-root');

const Modal  = ({ children, handleBurger }) => {
  return ReactDOM.createPortal(
    <Blackdrop className={handleBurger ? 'active': ''}>
      <div>{children}</div>
    </Blackdrop>,
    portalDiv
  );
};

export { Modal };
