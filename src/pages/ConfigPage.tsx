import React, { useEffect, useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useConfig } from "../hooks/useConfig";
import dayjs, { Dayjs } from "dayjs";

const ConfigPage = () => {
  const { pushTime, updatePushTime, cleanTime, updateCleanTime } = useConfig();
  const [timePicker, setTimePicker] = useState<Dayjs>(dayjs());
  const [cleanTimePicker, setCleanTimePicker] = useState<number>(cleanTime);
  useEffect(() => {
    setTimePicker(dayjs().hour(pushTime.hours).minute(pushTime.minutes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component="p">
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

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component="p">
          お掃除時間
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField
            id="outlined-basic"
            type="number"
            value={cleanTimePicker}
            onChange={(event) => {
              setCleanTimePicker(parseInt(event.target.value));
            }}
          />
          <Typography variant="h4" component="p" gutterBottom>
            分
          </Typography>
        </Stack>
      </Stack>

      <div>
        <Button
          variant="contained"
          onClick={() => {
            updatePushTime(timePicker);
            updateCleanTime(cleanTimePicker);
          }}
        >
          設定を保存
        </Button>
      </div>
    </Stack>
  );
};

export default ConfigPage;
