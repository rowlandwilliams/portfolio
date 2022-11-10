import classNames from "classnames";
import { HomeGraphTooltipInfo } from "../../../types";

interface Props {
  hovered: boolean;
  tooltipInfo: HomeGraphTooltipInfo;
}

export const HomeGraphTooltip = ({ hovered, tooltipInfo }: Props) => {
  return (
    <div
      className={classNames(
        "divide-y divide-gray-600 border border-gray-600 bg-gray-900 bg-opacity-80 rounded-sm absolute pointer-events-none transition-all duration-150 translate-y-full",
        { "hidden opacity-0": !hovered, "opacity-100 block": hovered }
      )}
      style={{ top: tooltipInfo.y, left: tooltipInfo.x + 10 }}
    >
      <section className="p-2">
        <h1 className="font-medium">{tooltipInfo.date}</h1>
      </section>
      <section className="p-2 flex gap-x-4">
        {tooltipInfo.prices?.map(({ stockMetric, colorClass, price }) => (
          <div key={stockMetric} className="flex gap-x-2 items-center">
            <div
              className={classNames("h-2 w-2 rounded-full", [
                `bg-${colorClass}`,
              ])}
            />
            <div>{price.toFixed(2)}</div>
          </div>
        ))}
      </section>
    </div>
  );
};
