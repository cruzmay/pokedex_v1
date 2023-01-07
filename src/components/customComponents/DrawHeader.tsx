import { styled, Theme } from "@mui/material/styles";

interface DrawHeaderProps {
  theme: Theme;
}

export const DrawerHeader = styled("div")<DrawHeaderProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
