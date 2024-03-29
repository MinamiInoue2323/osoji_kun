import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { onAuthStateChanged, User } from "firebase/auth";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

import { auth } from "../hooks/authFirebase";
import { authenticatedState, userUidState } from "../provider/firebaseStore";
import Header from "../components/Header";

type Props = {
  component: React.ReactNode;
};

const NavigationPage = ({ redirect }: { redirect: string }) => {
  return (
    <>
      <Navigate to={redirect} state={{ from: useLocation() }} replace={false} />
    </>
  );
};

export const RouterAuthenticatedCheck = (props: Props) => {
  const { component } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const setAuthenticated = useSetRecoilState(authenticatedState);

  // ユーザ情報のセット
  const setSignInUser = useSetRecoilState(userUidState);
  // 初期値入れてないからエラー起きる？
  const resetStatus = useResetRecoilState(userUidState);

  // useEffectをレンダリング毎に走らせる
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (getAuthUser: User | null) => {
        if (getAuthUser) {
          // これ逆？
          setSignInUser(getAuthUser.uid);
          setAuthenticated(true);
        } else {
          resetStatus();
          setAuthenticated(false);
        }
        setLoading(true);
      }
    );
    return unsubscribe;
  });

  if (!loading)
    return (
      <div className="flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  return <>{component}</>;
};

export const RouterHasAuthenticated = (props: Props) => {
  const { component } = props;
  const authenticated = useRecoilValue(authenticatedState);
  // 現在のurlを取得
  // 現状の仕様だと別のところから飛んだ後にloginでリロードをした場合最初に飛ぶ前のリンクに戻る
  const path = useLocation();
  if (!authenticated) {
    // 未認証の場合はsessionStorageに現在のURLを入れた後に
    sessionStorage.setItem("url_redirected_from", path.pathname);
    return <NavigationPage redirect="/login" />;
  }
  return <>{component}</>;
};
