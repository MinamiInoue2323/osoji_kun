import { signInWithRedirect, signOut } from "firebase/auth";
import { auth, provider } from "./authFirebase";
import { useNavigate } from "react-router-dom";

export const useFirebaseAuth = () => {
  const navigate = useNavigate();
  const signInAction = () => {
    signInWithRedirect(auth, provider).catch((err) => {
      alert(err);
    });
  };
  const signOutAction = () => {
    signOut(auth);
  };
  return { signInAction, signOutAction };
};
