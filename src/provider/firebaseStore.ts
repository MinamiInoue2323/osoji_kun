import { atom } from "recoil";

// 認証状態をチェックするboolean
export const userUidState = atom<string>({
  key: "userUidState",
});

// ログインしたユーザ情報を保持するためのステート
export const authenticatedState = atom<boolean>({
  key: "authencatedState",
  default: false,
});
