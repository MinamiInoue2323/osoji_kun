import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authenticatedState } from "../provider/firebaseStore";

const LoginPage = () => {
  const { signInAction, signOutAction } = useFirebaseAuth();
  const navigate = useNavigate();
  const authenticated = useRecoilValue(authenticatedState);
  useEffect(() => {
    const redirect_to_path = sessionStorage.getItem("url_redirected_from");
    if (authenticated && redirect_to_path !== null) {
      sessionStorage.removeItem("url_redirected_from");
      navigate(redirect_to_path);
    }
  }, []);

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
