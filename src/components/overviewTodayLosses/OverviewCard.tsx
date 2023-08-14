import { FunctionComponent } from "react";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
  CircularProgress,
} from "@mui/material";

interface IProps {
  isLoading: boolean;
  name: string;
  difference?: number;
  sx: object;
  value: number | undefined;
}

const OverviewCard: FunctionComponent<IProps> = (props) => {
  const { isLoading, name, difference, sx, value } = props;

  const getIcon = (type: string) => {
    switch (type) {
      case "Total":
        return <AlbumOutlinedIcon />;
      case "Captured":
        return <AgricultureOutlinedIcon />;
      case "Destroyed":
        return <DangerousOutlinedIcon />;
      case "Abandoned":
        return <ForestOutlinedIcon />;
      default:
        return <LocalFireDepartmentOutlinedIcon />;
    }
  };

  return (
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
              {name}
            </Typography>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Typography variant="h4">{value}</Typography>
            )}
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>{getIcon(name)}</SvgIcon>
          </Avatar>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
          <Stack alignItems="center" direction="row" spacing={0.5}>
            {difference !== 0 && (
              <SvgIcon color={"success"} fontSize="small">
                <ArrowUpIcon />
              </SvgIcon>
            )}
            <Typography color={"success.main"} variant="body2">
              {difference}
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="caption">
            Since last update
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
