import classNames from "classnames";
import { bisector } from "d3-array";
import { pointer, selectAll } from "d3-selection";
import { MouseEvent, useEffect, useState } from "react";
import { useResponsiveGraphWidth } from "../../hooks/useResponsiveGraphWidth";
import { HomeGraphTooltipInfo } from "../../types";
import stocks from "../data/stocks-long.json";
import { HomeGraphFocus } from "./HomeGraphFocus/HomeGraphFocus";
import { HomeGraphLines } from "./HomeGraphLines/HomeGraphLines";
import { HomeGraphTooltip } from "./HomeGraphTooltip/HomeGraphTooltip";
import {
  getHomeGraphScalesAndLineGenerator,
  getNewLineOffsets,
} from "./utils/utils";

const dates = stocks[0].values.map((day) => new Date(day.date));
const datesDomain = [
  Math.min(...dates.map((date) => date.getTime())),
  Math.max(...dates.map((date) => date.getTime())),
];
const prices = stocks.map((obj) => obj.values.map((day) => day.value)).flat();
const pricesDomain = [Math.min(...prices), Math.max(...prices)];
const bisect = bisector((d: Date, x: Date) => d.valueOf() - x.valueOf()).center;

export const HomeGraph = () => {
  const [hovered, setHovered] = useState(false);
  const [tooltipInfo, setTooltipInfo] = useState<HomeGraphTooltipInfo>(
    {} as HomeGraphTooltipInfo
  );

  const [lineOffsets, setLineOffsets] = useState<number[]>([]);
  const [lineLengths, setLineLengths] = useState<number[]>([]);
  const [animating, setAnimating] = useState<boolean>(true);

  const { ref, graphWidth, graphHeight } = useResponsiveGraphWidth();

  const { xScale, yScale, lineGenerator } = getHomeGraphScalesAndLineGenerator(
    datesDomain,
    pricesDomain,
    graphWidth,
    graphHeight
  );

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
      }, 1);

      return () => {
        clearInterval(id);
      };
    }
  }, [graphWidth, lineOffsets, lineLengths]);

  return (
    <div ref={ref} className="h-full w-full">
      <svg
        width={graphWidth}
        height={graphHeight}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setTooltipInfo({} as HomeGraphTooltipInfo);
        }}
        onMouseMove={(e: MouseEvent) => {
          const mouse = pointer(e);
          const xDate = xScale.invert(mouse[0]);
          const xDateIndex = bisect(dates, xDate);

          const { date, value } = stocks[0].values[xDateIndex];

          setTooltipInfo({
            date,
            prices: stocks.map(({ stockMetric, colorClass, values }) => ({
              stockMetric,
              colorClass,
              price: values[xDateIndex].value,
            })),
            x: mouse[0],
            y: yScale(value),
          });
        }}
        className={classNames("transition-opacity ", {
          "opacity-40 duration-500": !animating,
          "opacity-60 duration-100": hovered && !animating,
        })}
      >
        <HomeGraphLines
          lineGenerator={lineGenerator}
          lineLengths={lineLengths}
          lineOffsets={lineOffsets}
          stocks={stocks}
        />
        <HomeGraphFocus
          tooltipInfo={tooltipInfo}
          animating={animating}
          graphHeight={graphHeight}
        />
      </svg>
      {hovered && !animating && (
        <HomeGraphTooltip hovered={hovered} tooltipInfo={tooltipInfo} />
      )}
    </div>
  );
};
