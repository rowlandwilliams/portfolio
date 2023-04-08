const projectColors = [
  "indigo-800",
  "lime-400",
  "blue-800",
  "fuchsia-500",
  "orange-400",
  "red-400",
  "teal-300",
  "yellow-300",
];
const classPrefixes = ["stroke", "bg", "border", "hover:border", "hover:bg"];

const getSafelistColors = () => {
  return projectColors
    .map((color) => classPrefixes.map((prefix) => `${prefix}-${color}`))
    .flat();
};

const projectSafelistColors = getSafelistColors();

const safeList = [
  ...projectSafelistColors,
  "stroke-indigo-400",
  "stroke-pink-400",
  "stroke-yellow-400",
  "stroke-yellow-500",
  "stroke-blue-500",
  "stroke-rose-500",
  "stroke-indigo-500",'stroke-teal-500'
];

module.exports = { projectColors, safeList };
