import { curveCardinalClosed, line } from "d3-shape";

const lineGenerator = line()
  .x((d) => d[0])
  .y((d) => d[1])
  .curve(curveCardinalClosed);

const classes = [
  "fill-blue-700 stroke-blue-700",
  "fill-rose-600 stroke-rose-600",
  'fill-yellow-400 stroke-yellow-400'
];

interface Props {
  pathCoords: [number, number][];
}

export const RadarChartSvgPaths = ({ pathCoords }: Props) => {
  const d = lineGenerator(pathCoords);
  const className = classes[Math.floor(Math.random() * classes.length)];
  return <g>{d && <path d={d} fillOpacity={0.1} className={className} />}</g>;
};
