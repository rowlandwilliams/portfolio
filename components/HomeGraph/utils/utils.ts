import { scaleLinear, scaleTime } from "d3-scale";
import { curveBasis, curveStep, line } from "d3-shape";
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

const curve = Math.random() > 0.5 ? curveBasis : curveStep;

export const getHomeGraphScalesAndLineGenerator = (
  datesDomain: number[],
  pricesDomain: number[],
  graphWidth: number,
  graphHeight: number
) => {
  const xScale = scaleTime().domain(datesDomain).range([0, graphWidth]);
  const yScale = scaleLinear().domain(pricesDomain).range([graphHeight, 0]);

  const lineGenerator = line<{ date: string; value: number }>()
    .curve(curve)
    .x((d) => xScale(new Date(d.date).getTime()))
    .y((d) => yScale(d.value));

  return { xScale, yScale, lineGenerator };
};
