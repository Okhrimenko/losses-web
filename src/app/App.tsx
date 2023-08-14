import React, { useEffect, FunctionComponent } from "react";
import "./App.css";
import { Box, Container, Grid } from "@mui/material";
import Header from "../components/header/Header";
import { ILossModel } from "../interfaces";
import { getDataList } from "../api/apiClient";
import Chart from "../components/sections/Chart";
import OverviewTodayLosses from "../components/overviewTodayLosses/OverviewTodayLosses";

const App: FunctionComponent = React.memo(() => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [data, setDate] = React.useState<Array<ILossModel>>([]);

  useEffect(() => {
    getDataList().then((items) => {
      setDate(items);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 2 }}>
        <Container maxWidth={false}>
          <OverviewTodayLosses data={data} isLoading={isLoading} />
          <Grid xs={12} md={6} lg={2}>
            <Chart data={data} />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
});

export default App;
