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
import { Paper } from "@mui/material";
import { ILossModel } from "../../interfaces";

interface IPoprs {
  data: Array<ILossModel>;
}

const Chart: FunctionComponent<IPoprs> = React.memo(({ data }) => {
  const [maxTotal] = React.useState<number>(15000);

  return (
    <Paper>
      <div style={{ height: 600, marginTop: 20 }}>
        <div style={{ textAlign: "center" }}>
          Total count of <b>Losses</b> vehicles and equipment
        </div>
        <ResponsiveContainer>
          <AreaChart data={data}>
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