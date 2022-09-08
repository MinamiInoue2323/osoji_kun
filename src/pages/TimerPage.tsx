import { Typography } from "@mui/material";
import React from "react";
import OsojiTimer from "../components/OsojiTimer";

const TimerPage = () => {
  const timerTime = new Date();
  timerTime.setSeconds(timerTime.getSeconds() + 30); // 10 minutes timer
  return (
    <div>
      <div>
        <Typography variant="h2" component="h4" gutterBottom>
          床を掃除しよう！
        </Typography>
      </div>
      <OsojiTimer expiryTimeStamp={timerTime} />
    </div>
  );
};

export default TimerPage;
