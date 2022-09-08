// import { Place } from "@mui/icons-material";
import { useState } from "react";
import { Dayjs } from "dayjs";

export type configTime = {
  hours: number;
  minutes: number;
};

export const useConfig = () => {
  //pushtimeの型の付け方どうする問題
  const [pushTime, setPushTime] = useState<configTime>({
    hours: 21,
    minutes: 0,
  });

  const updatePushTime = (time: Dayjs) => {
    setPushTime({ hours: time.hour(), minutes: time.minute() });
  };

  return {
    pushTime,
    updatePushTime,
  };
};
