import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { configTime } from "../hooks/useConfig";

const { persistAtom } = recoilPersist();

const initialPushTime: configTime = {
  hours: 21,
  minutes: 0,
};

const pushTimeState = atom({
  key: "pushtime",
  default: initialPushTime as configTime,
  effects: [persistAtom],
});

export const usePushTime = () => {
  const [pushTime, setPushTime] = useRecoilState(pushTimeState);
  return { pushTime, setPushTime };
};
