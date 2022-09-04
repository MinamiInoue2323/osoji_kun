import React from "react";
import Header from "../components/Header";
import { Button, TextField, Typography } from "@mui/material";
// import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ConfigPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Typography variant="h4" component="p" gutterBottom>
          通知時間
        </Typography>
        <TextField id="standard-basic" placeholder="09:00" variant="standard" />
      </div>
      <div>
        <Button variant="contained">設定を保存</Button>
      </div>
    </div>
  );
};

export default ConfigPage;
