import classNames from "classnames";
import { Line } from "d3-shape";
import { Stocks } from "../../../types";

interface Props {
  stocks: Stocks;
  lineGenerator: Line<{
    date: string;
    value: number;
  }>;
  lineLengths: number[];
  lineOffsets: number[];
}

export const HomeGraphLines = ({
  stocks,
  lineGenerator,
  lineLengths,
  lineOffsets,
}: Props) => {
  return (
    <g>
      {stocks.map((stock, i) => (
        <path
          id="path"
          d={lineGenerator(stock.values) || undefined}
          key={stock.stockMetric}
          className={classNames(
            "stroke-[0.75] md:stroke-[1.5] fill-transparent",
            [`stroke-${stock.colorClass}`]
          )}
          strokeDasharray={lineLengths[i]}
          strokeDashoffset={lineOffsets[i]}
        ></path>
      ))}
    </g>
  );
};
