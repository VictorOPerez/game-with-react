import Cell from "./Cell";

const Stage = ({ stage }) => (
  <div className="">
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);
export default Stage;
