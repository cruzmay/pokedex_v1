import { Icon } from "@mui/material";
import { Box } from "@mui/system";
import { CSSProperties } from "react";

interface AbilityIconCircleProps {
  icon?: string;
  type?: string;
}
const ICON_CIRCLE: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 30,
  width: 30,
  background:
    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,233,0,1) 48%, rgba(253,187,45,1) 92%, rgba(241,179,46,1) 100%)",
  boxShadow: "4px 4px 7px -5px rgba(0,0,0,0.75)",
  border: "2px solid rgba(0,0,0,0.09)",
  borderRadius: 50,
};

export const AbilityIconCircle = (props: AbilityIconCircleProps) => {
  return (
    <Box sx={ICON_CIRCLE}>
      <Icon fontSize={"small"}>{props.icon}</Icon>
    </Box>
  );
};

AbilityIconCircle.defaultProps = {
  icon: "electric_bolt",
  type: "bold",
};
