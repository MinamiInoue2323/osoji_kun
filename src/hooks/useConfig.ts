// import { Place } from "@mui/icons-material";
import { useState } from "react";
import { Dayjs } from "dayjs";

export type configTime = {
  hours: number;
  minutes: number;
};

export const useConfig = () => {
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
