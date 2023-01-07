import styled from "@emotion/styled";
import { alpha, InputBase, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SyntheticEvent } from "react";
import React from "react";

interface SearchFieldProps {
  theme: Theme;
}

interface HandleInputField {
  event: React.SyntheticEvent;
  value: string;
}

const Search = styled("div")<SearchFieldProps>(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "60%",
  },
}));

const SearchIconWrapper = styled("div")<SearchFieldProps>(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)<SearchFieldProps>(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const handleInputField = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log(event.target.value);
};

export const SearchField = (props: SearchFieldProps) => {
  const { theme } = props;
  return (
    <Search theme={theme}>
      <SearchIconWrapper theme={theme}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        fullWidth
        inputProps={{ "aria-label": "search" }}
        theme={theme}
        onChange={(event) => handleInputField(event)}
      />
    </Search>
  );
};
