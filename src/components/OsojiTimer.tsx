import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

export type TimerProps = {
  expiryTimeStamp: Date;
  handleFinishInfo: () => void;
};

const OsojiTimer: React.FC<TimerProps> = (props) => {
  const { seconds, minutes, resume, isRunning, restart, start, pause } =
    useTimer({
      expiryTimestamp: props.expiryTimeStamp,
      autoStart: false,
      onExpire: () => {
        setIsOsojiCompleted(true);
        props.handleFinishInfo();
      },
    });
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isOsojiCompleted, setIsOsojiCompleted] = useState(false);

  const resetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);
    restart(time, false);
    setIsOsojiCompleted(false);
    setIsTimerStarted(false);
  };

  return (
    <>
      <Typography variant="h1" component="h2" gutterBottom>
        {minutes}:{("00" + seconds).slice(-2)}
      </Typography>
      {isOsojiCompleted ? (
        <>
          <Typography variant="h2" component="h2" gutterBottom>
            お掃除完了！
          </Typography>
          <Button variant="contained" onClick={resetTimer}>
            次の場所を掃除する
          </Button>
        </>
      ) : (
        <div>
          <Button
            variant="contained"
            onClick={() => {
              start();
              setIsTimerStarted(true);
            }}
            disabled={isTimerStarted}
          >
            掃除を開始する
          </Button>
          <Button variant="contained" onClick={pause} disabled={!isRunning}>
            一時停止
          </Button>
          <Button
            variant="contained"
            onClick={resume}
            disabled={isRunning || !isTimerStarted}
          >
            再開
          </Button>
        </div>
      )}
    </>
  );
};

export default OsojiTimer;
