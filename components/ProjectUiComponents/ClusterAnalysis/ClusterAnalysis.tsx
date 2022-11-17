import classNames from "classnames";
import { GroupSelectors } from "./GroupSelectors/GroupSelectors";
import { Scatterplots } from "./Scatterplots/Scatterplots";

interface Props {
  roundCorners?: boolean;
}

export const ClusterAnalysis = ({ roundCorners = false }: Props) => {
  return (
    <section
      className={classNames(
        "h-full bg-[#1D2025] text-sm ",
        {
          "rounded-lg": roundCorners,
        }
      )}
    >
      <Scatterplots />
      <GroupSelectors />
    </section>
  );
};
