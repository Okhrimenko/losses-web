import React, { FunctionComponent } from "react";
import { Grid } from "@mui/material";
import { ILossShortModel } from "../../interfaces";
import OverviewCard from "./OverviewCard";
import DescriptionCard from "./DescriptionCard";

interface IOverviewTodayLossesProps {
  data: Array<ILossShortModel>;
  isLoading: boolean;
}

const OverviewTodayLosses: FunctionComponent<IOverviewTodayLossesProps> = (
  props
) => {
  const { data, isLoading } = props;

  const onToday = React.useMemo(() => {
    return data.length > 0
      ? data.reduce((a, b) => (a.Date > b.Date ? a : b))
      : null;
  }, [data]);

  const latUpdate = React.useMemo(() => {
    return onToday && data.length > 0
      ? data
          .slice()
          .reverse()
          .find((o) => o.Total < onToday.Total)
      : null;
  }, [data, onToday]);

  return (
    <>
      <Grid item xs={12} sm={12} lg={12}>
        <DescriptionCard />
      </Grid>

      <Grid item xs={12} sm={6} lg={2}>
        <OverviewCard
          isLoading={isLoading}
          name="Total"
          difference={onToday?.Total!! - latUpdate?.Total!! || 0}
          sx={{ height: "100%" }}
          value={onToday?.Total}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <OverviewCard
          isLoading={isLoading}
          name="Destroyed"
          difference={onToday?.Destroyed!! - latUpdate?.Destroyed!! || 0}
          sx={{ height: "100%" }}
          value={onToday?.Destroyed}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <OverviewCard
          isLoading={isLoading}
          name="Captured"
          difference={onToday?.Captured!! - latUpdate?.Captured!! || 0}
          sx={{ height: "100%" }}
          value={onToday?.Captured}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <OverviewCard
          isLoading={isLoading}
          name="Damaged"
          difference={onToday?.Damaged!! - latUpdate?.Damaged!! || 0}
          sx={{ height: "100%" }}
          value={onToday?.Damaged}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <OverviewCard
          isLoading={isLoading}
          name="Abandoned"
          difference={onToday?.Abandoned!! - latUpdate?.Abandoned!! || 0}
          sx={{ height: "100%" }}
          value={onToday?.Abandoned}
        />
      </Grid>
    </>
  );
};

export default OverviewTodayLosses;
