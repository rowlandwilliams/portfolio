export const getNewLineOffsets = (lineOffsets: number[]) => {
  const decrement = 10;

  const newLineOffsets = lineOffsets.map((offset) => {
    if (offset > 0 && offset - decrement > 0) {
      return offset - decrement;
    }

    return 0;
  });

  return newLineOffsets;
};
