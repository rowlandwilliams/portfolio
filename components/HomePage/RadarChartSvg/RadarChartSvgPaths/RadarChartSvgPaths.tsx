import { curveCardinalClosed, line } from "d3-shape";

const lineGenerator = line()
  .x((d) => d[0])
  .y((d) => d[1])
  .curve(curveCardinalClosed);

const getStrokeClass = (color: string) => {
  return `stroke-${color}-500`;
};

interface Props {
  pathCoords: [number, number][];
  color: string;
}

export const RadarChartSvgPaths = ({ pathCoords, color }: Props) => {
  const d = lineGenerator(pathCoords);
  const strokeClass = getStrokeClass(color);
  return (
    <g>
      {d && (
        <>
          <path d={d} fill="url('#myGradient')" className={`path-base`} />
          <path d={d} fillOpacity={0} className={`${strokeClass} path`} />
        </>
      )}
    </g>
  );
};
