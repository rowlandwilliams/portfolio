import classNames from "classnames";
import { bisector } from "d3-array";
import { scaleLinear, scaleTime } from "d3-scale";
import { pointer, selectAll } from "d3-selection";
import { curveBasis, curveStep, line } from "d3-shape";
import { MouseEvent, useEffect, useState } from "react";
import { useResponsiveGraphWidth } from "../../hooks/useResponsiveGraphWidth";
import stocks from "../data/stocks-long.json";
import { getNewLineOffsets } from "./utils/utils";

const dates = stocks[0].values.map((day) => new Date(day.date));
const datesDomain = [
  Math.min(...dates.map((date) => date.getTime())),
  Math.max(...dates.map((date) => date.getTime())),
];
const prices = stocks.map((obj) => obj.values.map((day) => day.value)).flat();
const pricesDomain = [Math.min(...prices), Math.max(...prices)];
const curve = Math.random() > 0.5 ? curveBasis : curveStep;
// define bisect function for getting nearest date on graph to mouse
const bisect = bisector((d: Date, x: Date) => d.valueOf() - x.valueOf()).center;

export const HomeGraph = () => {
  const [hovered, setHovered] = useState(false);
  const [tooltipInfo, setTooltipInfo] = useState<{
    date: string;
    prices: { stockMetric: string; price: number }[];
    x: number;
    y: number;
  }>({});

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
        <h1 className="text-5xl font-medium absolute right-16 bg-gray-900">
          Information Re-imagined
        </h1>
      )}
      <svg
        width={graphWidth}
        height={graphHeight}
        onMouseEnter={() => {
          setHovered(true);
          // setTooltipInfo({ ...tooltipInfo, name, type });
        }}
        onMouseLeave={() => {
          setHovered(false);
          setTooltipInfo({});
        }}
        onMouseMove={(e: MouseEvent) => {
          const mouse = pointer(e);

          // get date closest to mouse coords
          const xDate = xScale.invert(mouse[0]);

          console.log(xDate);
          const index = bisect(dates, xDate);
          setTooltipInfo({
            date: stocks[0].values[index].date,
            prices: stocks.map(({ stockMetric, values }) => ({
              stockMetric,
              price: values[index].value,
            })),
            x: mouse[0],
            y: mouse[1],
          });
        }}
      >
        <g>
          {stocks.map((stock, i) => (
            <path
              id="path"
              d={lineGenerator(stock.values) || undefined}
              key={stock.stockMetric}
              className={classNames(
                "stroke-[0.75] md:stroke-[1.5] fill-transparent",
                [stock.colorClass]
              )}
              strokeDasharray={lineLengths[i]}
              strokeDashoffset={lineOffsets[i]}
            ></path>
          ))}
        </g>
        <line
          x1={tooltipInfo.x}
          x2={tooltipInfo.x}
          y1={0}
          y2={graphHeight}
          className="stroke-gray-600"
          strokeDasharray={2}
        />
      </svg>
      {hovered && !animating && (
        <div
          className={classNames(
            "divide-y divide-gray-200 bg-white rounded-sm absolute pointer-events-none transition-all duration-150 translate-y-full text-black",
            { "hidden opacity-0": !hovered, "opacity-100 block": hovered }
          )}
          style={{ top: tooltipInfo.y, left: tooltipInfo.x + 10 }}
        >
          <section className="p-2">
            <h1>{tooltipInfo.date}</h1>
          </section>
          <section className="p-2">
            {tooltipInfo.prices.map(({ stockMetric, price }) => (
              <div key={stockMetric} className="flex gap-x-2">
                <div className="capitalize">{stockMetric}:</div>
                <div>{price.toFixed(2)}</div>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};
