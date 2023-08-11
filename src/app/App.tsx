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
import { Container, Paper, Grid, Box, Typography } from "@mui/material";

import Header from "../components/header/Header";
import OverviewTodayLosses from "../components/overviewTodayLosses/OverviewTodayLosses";

const App: FunctionComponent = React.memo(() => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [data, setDate] = React.useState<Array<ILossModel>>([]);
  const [maxTotal] = React.useState<number>(15000);

  useEffect(() => {
    getDataList().then((items) => {
      setDate(items);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box className="Main">
      <Header />
      <Container maxWidth={false} sx={{ mt: 2, mb: 2 }}>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>           
              <OverviewTodayLosses data={data} isLoading={isLoading}/>
          </Grid>
        </Grid>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <div style={{height: 500, marginTop: 20 }}>
              <div className="App">
                Total count of <b>Losses</b> vehicles and equipment
              </div>
              <ResponsiveContainer>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Date" />
                  <YAxis type="number" domain={[0, maxTotal]} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Total"
                    stroke="red"
                    fill="red"
                  />
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
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
});

export default App;
