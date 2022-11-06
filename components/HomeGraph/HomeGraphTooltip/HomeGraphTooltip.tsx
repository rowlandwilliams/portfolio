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
        "divide-y divide-gray-200 bg-white rounded-sm absolute pointer-events-none transition-all duration-150 translate-y-full text-black",
        { "hidden opacity-0": !hovered, "opacity-100 block": hovered }
      )}
      style={{ top: tooltipInfo.y, left: tooltipInfo.x + 10 }}
    >
      <section className="p-2">
        <h1>{tooltipInfo.date}</h1>
      </section>
      <section className="p-2">
        {tooltipInfo.prices?.map(({ stockMetric, price }) => (
          <div key={stockMetric} className="flex gap-x-2">
            <div className="capitalize">{stockMetric}:</div>
            <div>{price.toFixed(2)}</div>
          </div>
        ))}
      </section>
    </div>
  );
};
