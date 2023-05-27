import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div >
      <AppBar /> 
      <Outlet />
      dsfdsfds
    </div>
  );
};
export default Layout;
