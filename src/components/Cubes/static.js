const shades = [
  "#191919",
  "#323232",
  "#4c4c4c",
  "#666666",
  "#7f7f7f",
  "#999999",
  "#b2b2b2",
  "#cccccc"
  // "#e5e5e5"
];

const length = shades.length;

export const oldcubes = [
  {
    name: "cube 1",
    color: "",
    background: ""
  },
  {
    name: "cube 2",
    color: "",
    background: ""
  }
];

export const cubes = [
  ...[...Array(length).keys()].map(index => ({
    name: `cube ${index}`,
    color: shades[index % length],
    background: shades[length - index - 1]
  }))
];
