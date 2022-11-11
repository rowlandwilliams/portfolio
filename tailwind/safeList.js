const projectColors = [
  "indigo-600",
  "lime-400",
  "blue-800",
  "fuchsia-500",
  "orange-400",
  "red-400",
  "teal-300",
];
const classPrefixes = ["stroke", "bg", "border", "hover:border"];

const getSafelistColors = () => {
  return projectColors
    .map((color) => classPrefixes.map((prefix) => `${prefix}-${color}`))
    .flat();
};

const safeListColors = getSafelistColors();

const safeList = [
  ...safeListColors,
  "stroke-indigo-400",
  "stroke-pink-400",
  "stroke-yellow-400",
];

module.exports = { projectColors, safeList };
