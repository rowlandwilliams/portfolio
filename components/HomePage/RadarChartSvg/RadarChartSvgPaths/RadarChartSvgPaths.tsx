import { curveCardinalClosed, curveCatmullRomClosed, line } from "d3-shape";

const lineGenerator = line()
  .x((d) => d[0])
  .y((d) => d[1])
  .curve(curveCardinalClosed);

interface Props {
  pathCoords: [number, number][];
}

export const RadarChartSvgPaths = ({ pathCoords }: Props) => {
  const d = lineGenerator(pathCoords);

  return (
    <g>
      {d && (
        <path
          d={d}
          fillOpacity={0.1}
          className="fill-indigo-500 stroke-indigo-500"
        />
      )}
    </g>
  );
};
