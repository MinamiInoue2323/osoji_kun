import { Place } from "@mui/icons-material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export type Config = {
  pushTime: Dayjs;
};

export const useConfig = () => {
  //pushtimeの型の付け方どうする問題
  const [pushTime, setPushTime] = useState<Dayjs | null>(dayjs());

  const updatePushTime = (time: Dayjs | null) => {
    setPushTime(time);
  };

  return {
    pushTime,
    updatePushTime,
  };
};
