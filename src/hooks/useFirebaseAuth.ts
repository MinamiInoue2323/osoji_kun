import { signInWithRedirect, signOut } from "firebase/auth";
import { auth, provider } from "./authFirebase";
import { useNavigate } from "react-router-dom";

export const useFirebaseAuth = () => {
  const navigate = useNavigate();
  const signInAction = () => {
    signInWithRedirect(auth, provider).catch((err) => {
      alert(err);
    });
    // problem: page遷移前にこのページが見えてしまう。非同期だから？
    navigate("/timer");
  };
  const signOutAction = () => {
    signOut(auth);
  };
  return { signInAction, signOutAction };
};
