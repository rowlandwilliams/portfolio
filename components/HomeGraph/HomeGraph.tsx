import classNames from "classnames";
import { scaleLinear, scaleTime } from "d3-scale";
import { selectAll } from "d3-selection";
import { line } from "d3-shape";
import { useEffect, useState } from "react";
import { useResponsiveGraphWidth } from "../../hooks/useResponsiveGraphWidth";
import stocks from "../data/stocks-long.json";

const dates = stocks[0].values.map((day) => new Date(day.date).getTime());

const datesDomain = [Math.min(...dates), Math.max(...dates)];

const prices = stocks.map((obj) => obj.values.map((day) => day.value)).flat();

const pricesDomain = [Math.min(...prices), Math.max(...prices)];

export const HomeGraph = () => {
  const [offset, setOffset] = useState([]);
  const [original, setOriginal] = useState([]);

  const { ref, graphWidth, graphHeight } = useResponsiveGraphWidth();

  const xScale = scaleTime().domain(datesDomain).range([0, graphWidth]);
  const yScale = scaleLinear().domain(pricesDomain).range([graphHeight, 0]);

  const lineGenerator = line<{ date: string; value: string }>()
    .x((d) => xScale(new Date(d.date).getTime()))
    .y((d) => yScale(d.value));

  useEffect(() => {
    if (typeof window !== "undefined") {
      //here `window` is available, so `window.document` (or simply `document`) is available too
      const paths = selectAll("#path");

      const nodes = paths.nodes();
      const pathLengths = nodes.map((path) => path.getTotalLength());

      //   if (path && path.node()) {
      setOriginal(pathLengths);
      setOffset(pathLengths);
      //   }
    }
  }, [graphWidth]);

  useEffect(() => {
    const id = setInterval(
      () => setOffset((oldCount) => oldCount.map((offset) => offset - 10)),
      10
    );

    return () => {
      clearInterval(id);
    };
  }, [graphWidth]);

  return (
    <div ref={ref} className="h-full w-full">
      <svg width={graphWidth} height={graphHeight}>
        <g>
          {stocks.map((stock, i) => (
            <path
              id="path"
              d={lineGenerator(stock.values)}
              key={stock.stockMetric}
              className={classNames("stroke-[1] fill-transparent", [
                stock.colorClass,
              ])}
              strokeDasharray={original[i]}
              strokeDashoffset={offset[i]}
            ></path>
          ))}
        </g>
      </svg>
    </div>
  );
};
