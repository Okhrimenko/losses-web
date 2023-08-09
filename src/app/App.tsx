import React, { useEffect, FunctionComponent } from "react";
import "./App.css";
import { ILossModel } from "../interfaces";
import { getDataList } from "../api/apiClient";
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
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import CoffeeTwoToneIcon from "@mui/icons-material/CoffeeTwoTone";

const buyMeCoffeUrl = "https://www.buymeacoffee.com/russiafailedstate";

const App: FunctionComponent = React.memo(() => {
  const [data, setDate] = React.useState<Array<ILossModel>>([]);
  const [maxTotal] = React.useState<number>(15000);

  useEffect(() => {
    getDataList().then((items) => {
      setDate(items);
    });
  }, []);

  return (
    <div className="App">
      <AppBar color="default" position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Documenting Russian Equipment Losses During The Russian Invasion Of
            Ukraine
          </Typography>
          <IconButton
            aria-label="donate"
            onClick={() => window.open(buyMeCoffeUrl)}
          >
            <CoffeeTwoToneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div style={{ width: "90%", height: 500 }}>
        <div>
          Total count of <b>Losses</b> vehicles and equipment
        </div>

        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
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
    </div>
  );
});

export default App;
