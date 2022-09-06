import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ConfigPage = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return (
    <div>
      <div>
        <Typography variant="h4" component="p" gutterBottom>
          通知時間
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div>
        <Button variant="contained">設定を保存</Button>
      </div>
    </div>
  );
};

export default ConfigPage;
