import { Box } from "@mui/system";
import { CSSProperties } from "react";
// "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(219,226,235,1) 100%)";
const backgroundColor =
  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(219,226,235,1) 100%)";
const itemBorder = "1px solid lightgray";

const CAP_CONTAINER: CSSProperties = {
  boxSizing: "content-box",
};

const BASIC_BOX: CSSProperties = {
  display: "flex",
  height: 18,
  width: "auto",
  padding: "3px 16px",
  background: backgroundColor,
  justifyContent: "center",
  alignItems: "center",
  borderBottom: itemBorder,
  borderTop: itemBorder,
  borderRadius: "10px 2px 10px 2px",
  boxShadow: "3px 2px 9px -4px rgba(0,0,0,0.81)",
  // marginLeft: -2,
};

interface PokemonInfoSlotsProps {
  children: React.ReactNode;
}

export const PokemonInfoSlots = (props: PokemonInfoSlotsProps) => {
  const { children } = props;
  return (
    <Box sx={CAP_CONTAINER}>
      {/** this component recibe a child so this component only wraps whatever
      need to be in a capsule */}
      <Box sx={BASIC_BOX}>{children}</Box>
    </Box>
  );
};
