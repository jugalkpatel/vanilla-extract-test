import { globalStyle } from "@vanilla-extract/css";

// attribute selector
globalStyle("a[href*=example]", {
  color: "red",
  padding: "1rem",
});
