import { useState } from "react";
import Header from "../components/Header";
import { Button, Typography } from "@mui/material";

const TimerPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Typography variant="h2" component="h4" gutterBottom>
          床を掃除しよう！
        </Typography>
      </div>
      <div>
        <Typography variant="h1" component="h2" gutterBottom>
          10:00
        </Typography>
        <div>
          <Button variant="contained">掃除を開始する</Button>
          <Button variant="outlined">掃除を完了する</Button>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
