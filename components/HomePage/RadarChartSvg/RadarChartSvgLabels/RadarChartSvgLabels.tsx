import { angleToCoord } from "../../utils/angleToCoord";
import { getYPaddingFromIndex } from "./utils/utils";

interface Props {
  traits: { name: string; score: number }[];
  nVertices: number;
  visDim: number;
  nLevels: number;
}

export const RadarChartSvgLabels = ({
  traits,
  nVertices,
  visDim,
  nLevels,
}: Props) => {
  return (
    <g>
      {traits.map(({ name }, i) => {
        const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;
        const coords = angleToCoord({
          angle,
          value: 10.5,
          width: visDim,
          domainArray: [0, nLevels],
          rangeArray: [0, visDim / 2],
        });
        const isFirstXHalf = coords[0] < visDim / 2;
        const isFirstYHalf = coords[1] < visDim / 2;
        const xPadding = 0;
        const yPadding = getYPaddingFromIndex(i);
        const textAnchor =
          i === 0 || i === traits.length / 2
            ? "middle"
            : isFirstXHalf
            ? "end"
            : "start";

        return (
          <text
            key={name}
            x={coords[0] + xPadding}
            y={coords[1] + yPadding}
            className="fill-gray-400"
            textAnchor={textAnchor}
            alignmentBaseline="middle"
          >
            {name}
          </text>
        );
      })}
    </g>
  );
};
