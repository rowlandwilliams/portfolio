/**
 * @description This function returns an array of number from one to n
 * It is useful for dynamically generating an array to map across to render multiple instances of the same component.
 * E.g. Multiple loading skeletons
 */
export const getArrayFromOneToNOptions = (nOptions: number) =>
  Array.from(Array(nOptions).keys()).map((key) => key + 1);
