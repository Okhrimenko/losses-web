import React, { FunctionComponent} from 'react';
import CoffeeTwoToneIcon from "@mui/icons-material/CoffeeTwoTone";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from "@mui/material";

const Header: FunctionComponent =  React.memo(() => {
  const buyMeCoffeUrl = "https://www.buymeacoffee.com/russiafailedstate";

  return(
    <AppBar color="default" position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {
            "Documenting Russian Equipment Losses During The Russian Invasion Of Ukraine"
          }
        </Typography>
        <IconButton
          aria-label="donate"
          color="warning"
          onClick={() => window.open(buyMeCoffeUrl)}>
          <CoffeeTwoToneIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
});

export default Header;