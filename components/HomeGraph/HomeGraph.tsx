import classNames from "classnames";
import { scaleLinear, scaleTime } from "d3-scale";
import { selectAll } from "d3-selection";
import { curveBasis, curveStep, line } from "d3-shape";
import { useEffect, useState } from "react";
import { useResponsiveGraphWidth } from "../../hooks/useResponsiveGraphWidth";
import stocks from "../data/stocks-long.json";
import { getNewLineOffsets } from "./utils/utils";

const dates = stocks[0].values.map((day) => new Date(day.date).getTime());
const datesDomain = [Math.min(...dates), Math.max(...dates)];
const prices = stocks.map((obj) => obj.values.map((day) => day.value)).flat();
const pricesDomain = [Math.min(...prices), Math.max(...prices)];
const curve = Math.random() > 0.5 ? curveBasis : curveStep;

export const HomeGraph = () => {
  const [lineOffsets, setLineOffsets] = useState<number[]>([]);
  const [lineLengths, setLineLengths] = useState<number[]>([]);
  const [animating, setAnimating] = useState<boolean>(true);

  const { ref, graphWidth, graphHeight } = useResponsiveGraphWidth();

  const xScale = scaleTime().domain(datesDomain).range([0, graphWidth]);
  const yScale = scaleLinear().domain(pricesDomain).range([graphHeight, 0]);

  const lineGenerator = line<{ date: string; value: number }>()
    .curve(curve)
    .x((d) => xScale(new Date(d.date).getTime()))
    .y((d) => yScale(d.value));

  useEffect(() => {
    if (typeof window !== "undefined" && animating) {
      const paths = selectAll<SVGPathElement, unknown>("#path");

      const nodes = paths.nodes();

      const pathLengths = nodes.map((path) => path?.getTotalLength());

      setLineLengths(pathLengths);
      setLineOffsets(pathLengths);
    }
  }, [graphWidth, animating]);

  useEffect(() => {
    if (graphWidth > 0) {
      const id = setInterval(() => {
        const newLineOffsets = getNewLineOffsets(lineOffsets);
        const decrementing =
          JSON.stringify(newLineOffsets) !== JSON.stringify(lineOffsets);

        decrementing ? setLineOffsets(newLineOffsets) : setAnimating(false);
      }, 1.5);

      return () => {
        clearInterval(id);
      };
    }
  }, [graphWidth, lineOffsets, lineLengths]);

  return (
    <div ref={ref} className="h-full w-full">
      {!animating && (
        <h1 className="text-5xl font-medium absolute right-16">
          Information Re-imagined
        </h1>
      )}
      <svg width={graphWidth} height={graphHeight}>
        <g>
          {stocks.map((stock, i) => (
            <path
              id="path"
              d={lineGenerator(stock.values) || undefined}
              key={stock.stockMetric}
              className={classNames("stroke-[0.75] md:stroke-[1.5] fill-transparent", [
                stock.colorClass,
              ])}
              strokeDasharray={lineLengths[i]}
              strokeDashoffset={lineOffsets[i]}
            ></path>
          ))}
        </g>
      </svg>
    </div>
  );
};
