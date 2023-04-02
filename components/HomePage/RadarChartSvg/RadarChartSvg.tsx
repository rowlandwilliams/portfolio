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
  { name: "Developer", score: 8 },
  { name: "Designer", score: 5 },
  { name: "Scientist", score: 4 },
  { name: "Artist", score: 8 },
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
  return (
    <div className="flex-grow sm:min-w-[700px]" ref={ref}>
      <svg width={graphDim} height={graphDim} className="mx-auto">
        <g transform={`translate(${padding / 2}, ${padding / 2})`}>
          <RadarChartSvgBaseLines lineData={lineData} />
          <RadarChartSvgPaths pathCoords={pathCoords} />
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
