import NavBar from '../../components/nav';
import { Outlet } from 'react-router-dom';

const AppLayout = () => (
    <>
      <NavBar />
      <Outlet />
    </>
  );

  export default AppLayout;