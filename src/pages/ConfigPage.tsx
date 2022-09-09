import React, { useEffect, useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useConfig } from "../hooks/useConfig";
import dayjs, { Dayjs } from "dayjs";

const ConfigPage = () => {
  const { pushTime, updatePushTime } = useConfig();
  const [timePicker, setTimePicker] = useState<Dayjs>(dayjs());
  useEffect(() => {
    setTimePicker(dayjs().hour(pushTime.hours).minute(pushTime.minutes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            value={timePicker}
            onChange={(newValue) => {
              if (newValue) {
                setTimePicker(newValue);
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>

      <div>
        <Button
          variant="contained"
          onClick={() => {
            updatePushTime(timePicker);
          }}
        >
          設定を保存
        </Button>
      </div>
    </Stack>
  );
};

export default ConfigPage;
