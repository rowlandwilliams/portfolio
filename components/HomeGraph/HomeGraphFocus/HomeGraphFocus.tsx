import classNames from "classnames";
import { HomeGraphTooltipInfo } from "../../../types";

interface Props {
  tooltipInfo: HomeGraphTooltipInfo;
  graphHeight: number;
  animating: boolean;
}

export const HomeGraphFocus = ({
  tooltipInfo,
  graphHeight,
  animating,
}: Props) => {
  return (
    <line
      x1={tooltipInfo.x}
      x2={tooltipInfo.x}
      y1={0}
      y2={graphHeight}
      className={classNames("stroke-gray-600", { hidden: animating })}
      strokeDasharray={2}
    />
  );
};
