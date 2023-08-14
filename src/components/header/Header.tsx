import React, { FunctionComponent } from "react";
import { AppBar, Toolbar, Typography, Button, Tooltip } from "@mui/material";

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
        <Tooltip title="Donate me a beer" aria-label="Donate me a beer">
          <Button
            variant="contained"
            color="info"
            onClick={() => window.open(buyMeCoffeUrl)}
          >
            {"🍺"}
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
});

export default Header;