import { StyledCell } from "./style/StyledCell";
import { TETROMINOS } from "../gameHelpers";

const Cell = ({ type }) => (
  <StyledCell type={"O"} color={TETROMINOS["O"].color}>
    cell
  </StyledCell>
);
export default Cell;
