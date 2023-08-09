import React, { useEffect, FunctionComponent, useMemo } from "react";
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
import { Menu, Restore, Favorite, Archive } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Container,
  Grid,
  CircularProgress,
} from "@mui/material";
import CoffeeTwoToneIcon from '@mui/icons-material/CoffeeTwoTone';
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import FireIcon from "@heroicons/react/24/solid/FireIcon";

const buyMeCoffeUrl = 'https://www.buymeacoffee.com/russiafailedstate';

const App: FunctionComponent = React.memo(() => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [data, setDate] = React.useState<Array<ILossModel>>([]);
  const [maxTotal] = React.useState<number>(18000);

  const difference = 12;
  const positive = true;
  const value = "$24k";
  const sx = { height: "100%" };

  useEffect(() => {
    getDataList().then((items) => {
      setIsLoading(false);
      setDate(items);
    });
  }, []);

  const onToday = useMemo(() => {
    return data.length > 0
      ? data.reduce((a, b) => (a.Date > b.Date ? a : b))
      : null;
  }, [data]);

  return (
    <div className="App">
      <AppBar color="default" position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Documenting Russian Equipment Losses During The Russian Invasion Of
            Ukraine
          </Typography>
            <IconButton aria-label="donate" onClick={()=>window.open(buyMeCoffeUrl)}>
              <CoffeeTwoToneIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>

      {/* <Container maxWidth="xl" sx={{marginTop: 10}}>
    <Grid container spacing={3}>
      <Grid xs={12} sm={6} lg={3}>
        <Card sx={sx}>
          <CardContent>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography color="text.secondary" variant="overline">
                  Budget
                </Typography>
                <Typography variant="h4">
                  <span>
                  {
                    onToday?.Total 
                  }
                  </span>
                </Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "error.main",
                  height: 56,
                  width: 56,
                }}
              >
                <SvgIcon>
                  <CurrencyDollarIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
            {difference && (
              <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Stack alignItems="center" direction="row" spacing={0.5}>
                  <SvgIcon
                    color={positive ? "success" : "error"}
                    fontSize="small"
                  >
                    {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </SvgIcon>
                  <Typography color={positive ? "success.main" : "error.main"} variant="body2">
                    Hello
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="caption">
                  Since last month
                </Typography>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container> */}

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

      {/* <AppBar position="fixed"   sx={{ top: 'auto', bottom: 0 }}>
    <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>            Bottom          </Typography>
    </Toolbar>
  </AppBar> */}

      {/* <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation       >
      <BottomNavigationAction label="Recents" icon={<Restore />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Archive" icon={<Archive />} />
    </BottomNavigation>
    </Paper> */}
    </div>
  );
});

export default App;
