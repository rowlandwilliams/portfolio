import { axisBottom, axisLeft } from "d3-axis";
import { scaleLinear, ScaleLinear, scaleTime, ScaleTime } from "d3-scale";
import { select, Selection } from "d3-selection";
import { Point } from "../../../../../types/cluster-analysis";

const pointPurple = "#C479FF";
const pointRed = "#FF6868";
const pointYellow = "#FFFA7A";
const pointPink = "#f472b6";

const pointColors: { [key: number]: string } = {
  0: pointYellow,
  1: pointRed,
  2: pointPurple,
  3: pointPink,
};

const axisPadding = 10;
export const graphMargin = { top: 40, right: 40, bottom: 40, left: 40 };

export const getClusterXAxis = (
  parentHeight: number,
  xScale: ScaleTime<number, number, never> | ScaleLinear<number, number, never>,
  isZoom = false
) => {
  const xAxis = axisBottom(xScale)
    .ticks(isZoom ? 5 : 10)
    .tickSize(-(parentHeight - graphMargin.top - graphMargin.bottom));

  return xAxis;
};

export const getClusterYAxis = (
  parentWidth: number,
  yScale: ScaleLinear<number, number, never>,
  isZoom = false
) => {
  const yAxis = axisLeft(yScale)
    .ticks(isZoom ? 5 : 10)
    .tickSize(-(parentWidth - graphMargin.left - graphMargin.right));

  return yAxis;
};

export const plotPoints = (
  pointsGroup: Selection<SVGGElement, unknown, HTMLElement, unknown>,
  pointsData: Point[],
  xScale: ScaleTime<number, number, never> | ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>
) => {
  return pointsGroup
    .selectAll("circle")
    .data(pointsData)
    .join("circle")
    .attr("class", (d) => "group-" + d.group)
    .attr("cx", (d) => xScale(d.x))
    .attr("cy", (d) => yScale(d.y))
    .attr("r", 3)
    .attr("fill", (d) => pointColors[d.group])
    .on("mouseover", (d) => console.log(d.x, d));
};

export const getGraphSelections = (graphId = "main") => {
  return {
    xAxisGroup: select<SVGGElement, unknown>(`#x-axis-${graphId}`),
    yAxisGroup: select<SVGGElement, unknown>(`#y-axis-${graphId}`),
    brushGroup: select<SVGGElement, unknown>(`#brush-${graphId}`),
    pointsGroup: select<SVGGElement, unknown>(`#points-${graphId}`),
    lineGroup: select<SVGGElement, unknown>(`#line-${graphId}`),
  };
};

export const getXScale = (
  parentWidth: number,
  xDomain = [-2, 2],
  isTime = false
) => {
  return isTime
    ? scaleTime()
        .domain(xDomain)
        .range([
          graphMargin.left + axisPadding,
          parentWidth - graphMargin.right,
        ])
    : scaleLinear()
        .domain(xDomain)
        .range([graphMargin.left, parentWidth - graphMargin.right]);
};

export const getYScale = (parentHeight: number, yDomain = [2, -2]) => {
  const yScale = scaleLinear()
    .domain(yDomain)
    .range([graphMargin.top, parentHeight - graphMargin.bottom - axisPadding]);

  return yScale;
};
