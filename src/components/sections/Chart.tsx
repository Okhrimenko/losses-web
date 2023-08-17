import React, { FunctionComponent } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import { Paper, Stack, Typography, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ILossModel } from "../../interfaces";
import dayjs, { Dayjs } from "dayjs";

interface IPoprs {
  data: Array<ILossModel>;
}

const Chart: FunctionComponent<IPoprs> = React.memo(({ data }) => {
  const [maxTotal] = React.useState<number>(15000);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

  const maxDate = React.useMemo(() => {
    return data.length > 0
      ? data.reduce((a, b) => (a.Date > b.Date ? a : b))
      : null;
  }, [data]);

  const minDate = React.useMemo(() => {
    return data.length > 0
      ? data.reduce((a, b) => (a.Date < b.Date ? a : b))
      : null;
  }, [data]);

  const clearFilters = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const filtered = React.useMemo(() => {
    let result = [...data];

    if (startDate) {
      result = [...result.filter((o) => dayjs(o.Date) >= dayjs(startDate))];
    }

    if (endDate) {
      result = [...result.filter((o) => dayjs(o.Date) <= dayjs(endDate))];
    }

    return result;
  }, [data, startDate, endDate]);

  return (
    <Paper>
      <div style={{ height: 500, marginTop: 20 }}>
        <Stack sx={{ p: 1 }} direction="row" spacing={3}>
          <Typography variant="h6" alignContent={"center"}>
            Total count of <b>Losses</b> vehicles and equipment
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              minDate={dayjs(minDate?.Date)}
              maxDate={endDate}
              label="Start Date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
            />

            <DatePicker
              label="End Date"
              value={endDate}
              minDate={startDate}
              maxDate={dayjs(maxDate?.Date)}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
            />

            <Button
              variant="contained"
              color="info"
              onClick={() => clearFilters()}
            >
              {"x"}
            </Button>
          </LocalizationProvider>
        </Stack>

        <ResponsiveContainer>
          <AreaChart data={filtered}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis type="number" domain={[0, maxTotal]} />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="red" fill="red" />
            <Area
              type="monotone"
              dataKey="Destroyed"
              stroke="#2224d8"
              fill="#2224d8"
            />
            <Area
              type="monotone"
              dataKey="Captured"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Damaged"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
});

export default Chart;
