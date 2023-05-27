import { useState } from 'react';
import Button from '@mui/material/Button';
export default function LoginAndLogout() {
  const [loginStatus, setLoginStatus] = useState(false);
  const handelState = () => {
    setLoginStatus(!loginStatus);
  };
  return (
    <Button variant="contained" size="small" onClick={handelState}>
      {loginStatus === true ? 'LogOut' : 'LogIn'}
    </Button>
  );
}
