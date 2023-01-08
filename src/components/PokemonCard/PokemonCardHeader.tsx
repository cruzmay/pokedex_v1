import { Grid, Theme, Typography } from "@mui/material";
import { Span } from "../customComponents/Span";
import { AbilityIconCircle } from "./AbilityIconCircle";
import { PokemonInfoSlots } from "./PokemonInfoSlots";

interface PokemonCardHeaderProps {
  theme: Theme;
}

export const PokemonCardHeader = (props: PokemonCardHeaderProps) => {
  const { theme } = props;
  return (
    <>
      <Grid item xs={4}>
        <PokemonInfoSlots>
          <Typography
            fontFamily={"Zen Dots"}
            fontSize={12}
            lineHeight={0}
            fontStyle="italic"
            children="BASIC"
          />
        </PokemonInfoSlots>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          fontWeight={500}
          fontSize={20}
          marginLeft={1}
          marginTop={"-4px"}
        >
          Pikachu
        </Typography>
      </Grid>
      <Grid item xs={4} justifyContent="end" display="flex">
        <Typography
          variant="body1"
          fontSize={20}
          fontWeight={700}
          marginTop={"-3px"}
        >
          <Span theme={theme} fontSize={12}>
            hp
          </Span>
          60
        </Typography>
        <AbilityIconCircle size="medium" />
      </Grid>
    </>
  );
};
