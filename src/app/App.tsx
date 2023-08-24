import React, { useEffect, FunctionComponent } from "react";
import "./App.css";
import { Box, Container, Grid } from "@mui/material";
import Header from "../components/header/Header";
import { ILossShortModel } from "../interfaces";
import { getDataList } from "../api/apiClient";
import Chart from "../components/sections/Chart";
import OverviewTodayLosses from "../components/overviewTodayLosses/OverviewTodayLosses";

const App: FunctionComponent = React.memo(() => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [data, setDate] = React.useState<Array<ILossShortModel>>([]);

  useEffect(() => {
    getDataList().then((items) => {
      setDate(items);
      setIsLoading(false);
    });
  }, []);

  // const tanks = data.map(o=>o.EquipmentLossList).reduce((p,c)=>p.concat(c));

  // const tanks = data.flatMap((o) =>
  //   o.EquipmentLossList.map((e) => {
  //     return {
  //       Id: o.Id,
  //       Date: o.Date,
  //       Abandoned: e.Abandoned,
  //       Captured: e.Captured,
  //       Damaged: e.Damaged,
  //       Destroyed: e.Destroyed,
  //       Total: e.Total,
  //       Text: e.Text,
  //     } as ILossModel;
  //   })
  // );

  return (
    <Box>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 2 }}>
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <OverviewTodayLosses data={data} isLoading={isLoading} />
            <Grid item xs={12} sm={12} lg={12}>
              <Chart
                caption="Total count of Losses vehicles and equipment"
                data={data}
              />
            </Grid>
            {/* <Grid item xs={12} sm={12} lg={12}>
              <Chart caption="Total count of Tanks Losses" data={tanks} />
            </Grid> */}

            {/*             <Grid item>
              <OverviewTodayLosses data={data} isLoading={isLoading} />
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={12}>
                  <Chart
                    caption="Total count of Losses vehicles and equipment"
                    data={data}
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                  <Chart caption="Total count of Tanks Losses" data={tanks} />
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
});

export default App;
