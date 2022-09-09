import { Button, Typography } from "@mui/material";
import React from "react";
import OsojiTimer from "../components/OsojiTimer";
import { useCleanTargetPlace } from "../hooks/useCleanTargetPlace";
import { useNavigate } from "react-router-dom";

const TimerPage = () => {
  const timerTime = new Date();
  timerTime.setSeconds(timerTime.getSeconds() + 600); // 10 minutes timer
  const { currentTargetPlace, finishClean } = useCleanTargetPlace();
  const navigate = useNavigate();

  const handleFinishInfo = () => {
    if (currentTargetPlace) {
      finishClean(currentTargetPlace);
    }
  };

  return (
    <div>
      <div>
        {currentTargetPlace ? (
          <>
            <Typography variant="h2" component="h4" gutterBottom>
              {currentTargetPlace.name}を掃除しよう！
            </Typography>
            <OsojiTimer
              handleFinishInfo={handleFinishInfo}
              expiryTimeStamp={timerTime}
            />
          </>
        ) : (
          <>
            <Typography variant="h2" component="h4" gutterBottom>
              まずは掃除場所を登録しよう！
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/place");
              }}
            >
              掃除場所の登録
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TimerPage;
