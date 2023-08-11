import React, { FunctionComponent, useMemo } from "react";
import {
  Box,
  Stack,
  Paper,
  Avatar,
  SvgIcon,
  Typography,
  CircularProgress,
} from "@mui/material";
import { ILossModel } from "../../interfaces";
import FireIcon from "@heroicons/react/24/solid/FireIcon";

interface IOverviewTodayLossesProps {
  data: Array<ILossModel>;
  isLoading: boolean;
}

const OverviewTodayLosses: FunctionComponent<IOverviewTodayLossesProps> = ({
  data,
  isLoading,
}) => {
  const onToday = useMemo(() => {
    return data.length > 0
      ? data.reduce((a, b) => (a.Date > b.Date ? a : b))
      : null;
  }, [data]);

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="140px"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Stack alignItems="stretch" direction="column" spacing={3}>
          <Stack
            alignItems="flex-start"
            justifyContent="space-between"
            direction="row"
            spacing={3}
          >
            <Typography variant="h4">{`Losses on ${onToday?.Date.toString()}`}</Typography>
            <Avatar
              sx={{
                backgroundColor: "error.main",
                height: 56,
                width: 56,
              }}
            >
              <SvgIcon>
                <FireIcon />
              </SvgIcon>
            </Avatar>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4">{`Total: ${onToday?.Total}`}</Typography>
            <Typography variant="h4">{`Destroyed: ${onToday?.Destroyed}`}</Typography>
            <Typography variant="h4">{`Captured: ${onToday?.Captured}`}</Typography>
            <Typography variant="h4">{`Damaged: ${onToday?.Damaged}`}</Typography>
            <Typography variant="h4">{`Abandoned: ${onToday?.Abandoned}`}</Typography>
          </Stack>
        </Stack>
      )}
    </Paper>
  );
};

export default OverviewTodayLosses;
