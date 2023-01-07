import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { LateralMenu } from "./LateralMenu";
import { TopNavBar } from "./TopNavBar";
import { DrawerHeader } from "../customComponents/DrawHeader";
import { useState } from "react";

const drawerWidth = 240;

export const Layout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNavBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        width={drawerWidth}
        theme={theme}
      />
      <LateralMenu
        open={open}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
        width={drawerWidth}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader theme={theme} />
        <Outlet />
      </Box>
    </Box>
  );
};
