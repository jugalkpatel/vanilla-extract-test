import { globalStyle } from "@vanilla-extract/css";

// universal selector
globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});
