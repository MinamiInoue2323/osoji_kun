import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { configTime } from "../hooks/useConfig";

const { persistAtom } = recoilPersist();

// 秒単位でcleanTimeを保存
const cleanTimeState = atom({
  key: "cleantime",
  default: 600 as number,
  effects: [persistAtom],
});

export const useCleanTime = () => {
  const [cleanTime, setCleanTime] = useRecoilState(cleanTimeState);
  return { cleanTime, setCleanTime };
};
