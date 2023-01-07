import { Box, IconButton, Theme, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { SearchField } from "./SearchField";
import { NavMenuIcons } from "./NavMenuIcons";
import { CSSProperties } from "react";

const TOOLBAR: CSSProperties = {};
const SEPARATOR_BOX: CSSProperties = {
  flexGrow: 1,
};

interface TopNavbarProps {
  open: boolean;
  handleDrawerOpen: () => void;
  width: number;
  theme: Theme;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  width?: number;
  theme?: Theme;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, width }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: width,
    width: `calc(100% - ${width}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const TopNavBar = (props: TopNavbarProps) => {
  const { open, handleDrawerOpen, width = 270, theme } = props;
  return (
    <AppBar position="fixed" open={open} width={width} theme={theme}>
      <Toolbar sx={TOOLBAR}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Pokedex
        </Typography>
        <Box sx={SEPARATOR_BOX} />
        <SearchField theme={theme} />
        <Box sx={SEPARATOR_BOX} />
        <NavMenuIcons />
      </Toolbar>
    </AppBar>
  );
};
