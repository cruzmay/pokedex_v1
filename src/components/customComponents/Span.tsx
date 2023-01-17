import { Theme } from "@mui/material";
import { styled } from "@mui/system";

interface SpanProps {
  theme: Theme;
  fontSize?: number | string;
  fontWeight?: number | string;
  fontFamily?: string;
  padding?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  margin?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
}

export const Span = styled("span")<SpanProps>(
  ({
    theme,
    fontSize,
    fontWeight,
    fontFamily,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  }) => ({
    ...theme.typography,
    fontSize,
    fontWeight,
    fontFamily,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  })
);
