// this components uses class styles but with the same names as class_selector.css.ts, task it to check whether they use different styles or not.

import { classStyle } from "./different_name.css";

function DifferentName() {
  return <h3 className={classStyle}>I'm using class styles</h3>;
}

export { DifferentName };
