import { container } from "./nthChildStyles.css";
function NthChild() {
  return (
    <ul className={container}>
      <li>I'm first</li>
      <li>I'm second</li>
      <li>I'm third</li>
      <li>I'm fourth</li>
    </ul>
  );
}

export { NthChild };
