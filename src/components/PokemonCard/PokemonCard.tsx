import Card from "@mui/material/Card";
import { CardActionArea, Grid, useTheme } from "@mui/material";
import { CSSProperties } from "react";
import { PokemonCardHeader } from "./PokemonCardHeader";

const cardHeight = 400;
const cardWidth = 300;
const borderRadius = 3;

const CARD: CSSProperties = {
  maxWidth: cardWidth,
  minHeight: cardHeight,
  background:
    "linear-gradient(0deg, rgba(255,233,0,1) 0%, rgba(253,187,45,1) 100%)",
  borderRadius: borderRadius,
};
const CARD_ACTION_AREA: CSSProperties = {
  height: cardHeight,
};
const GRID_CONTAINER: CSSProperties = {
  border: "15px solid rgba(255,255,255, 0.4  )",
  borderRadius: borderRadius,
  height: "100%",
  boxShadow: "inset 0px 6px 60px -49px rgba(0,0,0,0.61)",
};

export const PokemonCard = () => {
  const theme = useTheme();
  return (
    <Card sx={CARD}>
      <CardActionArea sx={CARD_ACTION_AREA}>
        <Grid sx={GRID_CONTAINER} padding={"5px"} container xs={12}>
          <PokemonCardHeader theme={theme} />
        </Grid>
      </CardActionArea>
    </Card>
  );
};
