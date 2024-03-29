import classNames from "classnames";
import { bisector } from "d3-array";
import { pointer, selectAll } from "d3-selection";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import { useResponsiveGraphDims } from "../../hooks/useResponsiveGraphWidth";
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

  const { ref, graphWidth, graphHeight } = useResponsiveGraphDims();

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
      const id = setInterval(
        () => {
          const newLineOffsets = getNewLineOffsets(lineOffsets);
          const atZero = lineOffsets.every((value) => value < 0);

          setLineOffsets(newLineOffsets);

          if (atZero) {
            setAnimating(false);
          }
        },
        animating ? 1 : 20
      );

      return () => {
        clearInterval(id);
      };
    }
  }, [graphWidth, lineOffsets, lineLengths, animating]);

  return (
    <div ref={ref} className="h-full w-full absolute">
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
          "opacity-40 duration-1000": !animating,
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
      {!animating && (
        <div className="absolute top-0 left-16 my-16 rounded-md overflow-hidden ">
          <div className="bg-gray-200">
            <section className="flex h-full items-center gap-x-2 p-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            </section>
          </div>
          <div className="relative w-[800px] h-[399px] ">
            <Image
              src="/vessels-ui.png"
              fill
              alt="suh"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
