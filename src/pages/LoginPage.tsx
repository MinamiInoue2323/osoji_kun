import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { Button } from "@mui/material";

const LoginPage = () => {
  const { signInAction, signOutAction } = useFirebaseAuth();

  return (
    <>
      <Button variant="contained" onClick={signInAction} sx={{ m: 2 }}>
        Login
      </Button>
      <Button variant="contained" onClick={signOutAction} sx={{ m: 2 }}>
        Logout
      </Button>
    </>
  );
};

export default LoginPage;
