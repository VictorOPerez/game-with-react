export const TETROMINOS = {
  0: { chape: [[0]], color: "0,0,0" },
  I: {
    chape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80, 227,230",
  },
  J: {
    chape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95,223",
  },
  L: {
    chape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "223,173,36",
  },
  O: {
    chape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "223,217,36",
  },
  S: {
    chape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "48,211,36",
  },
  T: {
    chape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "132,61,198",
  },
  Z: {
    chape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "227,78,78",
  },
};
export const randomTetromino = () => {
  const tetrominos = "IJLOTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
