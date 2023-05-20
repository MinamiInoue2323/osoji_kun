// import { Place } from "@mui/icons-material";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { usePushTime } from "../states/pushTimeState";
import { useCleanTime } from "../states/cleanTimeState";

const { persistAtom } = recoilPersist();

export type configTime = {
  hours: number;
  minutes: number;
};

export const useConfig = () => {
  const { pushTime, setPushTime } = usePushTime();
  const { cleanTime, setCleanTime } = useCleanTime();

  const updatePushTime = (time: Dayjs) => {
    setPushTime({ hours: time.hour(), minutes: time.minute() });
  };
  const updateCleanTime = (time: number) => {
    setCleanTime(time);
  };

  return {
    pushTime,
    updatePushTime,
    cleanTime,
    updateCleanTime,
  };
};
