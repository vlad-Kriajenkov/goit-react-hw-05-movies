import AppBar from 'Layout/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Blackdrop } from './Layout.styled';
const Layout = () => {
  return (
    <Blackdrop>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </Blackdrop>
  );
};
export default Layout;
