import { angleToCoord } from "./angleToCoord";

export const getTraitCoordinates = ({
  traits,
  nVertices,
  graphDim,
  nLevels,
}: {
  traits: {
    name: string;
    score: number;
  }[];
  nVertices: number;
  graphDim: number;
  nLevels: number;
}) => {
  const half = graphDim / 2;
  return traits.map((trait, i) => {
    const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;
    const coords = angleToCoord({
      angle,
      value: trait.score,
      width: graphDim,
      domainArray: [0, nLevels],
      rangeArray: [0, half],
    });

    return coords;
  });
};
