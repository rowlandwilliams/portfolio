const projectColors = [
  "indigo-600",
  "lime-400",
  "blue-800",
  "fuchsia-500",
  "orange-400",
];
const classPrefixes = ["stroke", "bg", "border", "hover:border"];

export const getSafelistColors = () => {
  return projectColors
    .map((color) => classPrefixes.map((prefix) => `${prefix}-${color}`))
    .flat();
};
