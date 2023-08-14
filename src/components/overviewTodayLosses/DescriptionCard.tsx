import React, { FunctionComponent } from "react";
import { Card, CardContent, Stack, Typography, Link } from "@mui/material";

const DescriptionCard: FunctionComponent = React.memo(() => {
  const dataSource =
    "https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html";

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Stack alignItems="stretch" direction="column" spacing={3}>
          <Typography variant="h6">
            {"All data is confirmed by photo or video. Data source site: "}
            <Link target="_blank" rel="noreferrer" href={dataSource}>
              oryxspioenkop.com
            </Link>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
});

export default DescriptionCard;
