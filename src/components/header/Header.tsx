import React, { FunctionComponent } from "react";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header: FunctionComponent = React.memo(() => {
  const buyMeCoffeUrl = "https://www.buymeacoffee.com/russiafailedstate";

  return (
    <AppBar color="default" position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {
            "Documenting Russian Equipment Losses During The Russian Invasion Of Ukraine"
          }
        </Typography>
        <Button
          variant="contained"
          color="info"
          onClick={() => window.open(buyMeCoffeUrl)}
          endIcon={<SportsBarOutlinedIcon />}
        >
          Donate
        </Button>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
