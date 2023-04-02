export const getYPaddingFromIndex = (index: number) => {
  switch (index) {
    case 0:
      return -5;
    case 1:
      return 0;
    case 2:
      return 5;
    case 3:
      return 0;
    default:
      return 0;
  }
};
