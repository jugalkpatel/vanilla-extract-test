import { style } from "@vanilla-extract/css";

export const subContainer = style({
  display: "flex",
  flexDirection: "column",
  selectors: {
    "&:nth-child(3)": {
      backgroundColor: "red",
    },
  },
});
