import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useConfig } from "../hooks/useConfig";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ConfigPage = () => {
  const { pushTime, updatePushTime } = useConfig();
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h4" component="p" gutterBottom>
          通知時間
        </Typography>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          sx={{ width: "right" }}
        >
          <TimePicker
            value={pushTime}
            onChange={(newValue) => {
              updatePushTime(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>

      <div>
        <Button variant="contained">設定を保存</Button>
      </div>
    </Stack>
  );
};

export default ConfigPage;
