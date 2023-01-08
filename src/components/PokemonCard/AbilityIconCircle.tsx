import { Icon } from "@mui/material";
import { Box } from "@mui/system";
import { CSSProperties, useMemo } from "react";

interface AbilityIconCircleProps {
  icon?: string;
  type?: string;
  size?: "small" | "medium" | "large";
}
const ICON_CIRCLE: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 20,
  width: 20,
  fontSize: 12,
  background:
    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,233,0,1) 48%, rgba(253,187,45,1) 92%, rgba(241,179,46,1) 100%)",
  boxShadow: "4px 4px 7px -5px rgba(0,0,0,0.75)",
  border: "2px solid rgba(0,0,0,0.09)",
  borderRadius: 50,
};

export const AbilityIconCircle = (props: AbilityIconCircleProps) => {
  const { icon, type, size } = props;
  const computedIconType = useMemo(() => {
    let styledType, iconType
    switch (type) {
      case "normal":
        styledType = {
          ...ICON_CIRCLE,
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 28%, rgba(167,226,238,1) 100%)" ,
        }
        iconType = "adb"
        return {styledType, iconType}
      default: 
      styledType = {
          ...ICON_CIRCLE,
        }
        iconType = "electric_bolt"
        return {styledType, iconType}

    }
  },[type])

  const computedIconSize = useMemo(() => {
    switch (size) {
      case "medium":
        return { height: 30, width: 30, fontSize: 18 };
      case "large":
        return { height: 40, width: 40, fontSize: 22 };
      default:
        return { ...ICON_CIRCLE };
    }
  }, [size]);

  return (
    <Box sx={{...computedIconType.styledType, ...computedIconSize }}>
      <Icon fontSize={"inherit"}>{computedIconType.iconType}</Icon>
    </Box>
  );
};

// AbilityIconCircle.defaultProps = {
//   icon: "electric_bolt",
//   type: "bold",
// };
