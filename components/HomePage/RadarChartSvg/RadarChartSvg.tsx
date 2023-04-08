import { useResponsiveGraphDims } from "../../../hooks/useResponsiveGraphWidth";
import { getDiagonalLineData } from "../utils";
import { getTraitCoordinates } from "../utils/traitCoordinates";
import { RadarChartSvgBaseLines } from "./RadarChartSvgBaseLines/RadarChartSvgBaseLines";
import { RadarChartSvgLabels } from "./RadarChartSvgLabels/RadarChartSvgLabels";
import { RadarChartSvgPaths } from "./RadarChartSvgPaths/RadarChartSvgPaths";

const padding = 90;
const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nLevels = levels.length;
const traits = [
  { name: "Developer", score: 9 },
  { name: "Scientist", score: 3 },
  { name: "Designer", score: 5 },
  { name: "Artist", score: 7 },
];
const colors = [
  { name: "rose", hex: "#f43f5e" },
  { name: "yellow", hex: "#eab308" },
  { name: "indigo", hex: "#6366f1" },
  { name: "teal", hex: "#14b8a6" },
];

export const RadarChartSvg = () => {
  const { ref, graphWidth, graphHeight } = useResponsiveGraphDims();
  const graphDim = Math.min(graphWidth, graphHeight);
  const nVertices = traits.length;
  const visDim = graphDim - padding;
  const lineData = getDiagonalLineData(levels, nVertices, visDim);
  const pathCoords = getTraitCoordinates({
    traits,
    nVertices,
    nLevels,
    graphDim: visDim,
  });
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div
      className="flex-grow w-full md:w-1/2 flex-shrink-0 min-h-[400px]"
      ref={ref}
    >
      <svg width={graphDim} height={graphDim} className="mx-auto">
        <defs>
          <radialGradient id="myGradient">
            <stop offset="20%" stopColor={color.hex} stopOpacity={0} />
            <stop offset="95%" stopColor={color.hex} stopOpacity={0.3} />
          </radialGradient>
        </defs>
        <g transform={`translate(${padding / 2}, ${padding / 2})`}>
          <RadarChartSvgBaseLines lineData={lineData} />
          <RadarChartSvgPaths pathCoords={pathCoords} color={color.name} />
          <RadarChartSvgLabels
            traits={traits}
            nLevels={nLevels}
            nVertices={nVertices}
            visDim={visDim}
          />
        </g>
      </svg>
    </div>
  );
};
