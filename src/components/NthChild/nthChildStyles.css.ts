import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  selectors: {
    "&:nth-child(1)": {
      color: "silver",
    },
  },
});
