import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, styled, Theme, useTheme } from "@mui/material";
import { CSSProperties } from "react";
import { PokemonInfoSlots } from "./PokemonInfoSlots";
import { Span } from "../customComponents/Span";
import { AbilityIconCircle } from "./AbilityIconCircle";

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
        <Grid sx={GRID_CONTAINER} padding={1} container xs={12}>
          <Grid item xs={4}>
            <PokemonInfoSlots>
              <Typography
                fontFamily={"Zen Dots"}
                fontSize={14}
                fontStyle="italic"
                children="BASIC"
              />
            </PokemonInfoSlots>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              fontWeight={500}
              paddingLeft={1}
              marginTop={"-2px"}
            >
              Pikachu
            </Typography>
          </Grid>
          <Grid item xs={4} justifyContent="end" display="flex">
            <Typography variant="body1" marginTop={"3px"}>
              <Span theme={theme}>hp</Span>
              60
            </Typography>
            <AbilityIconCircle />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
