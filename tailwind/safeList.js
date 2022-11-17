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
const classPrefixes = ["stroke", "bg", "border", "hover:border"];

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
];

module.exports = { projectColors, safeList };
