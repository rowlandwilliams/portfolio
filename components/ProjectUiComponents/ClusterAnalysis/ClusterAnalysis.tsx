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
        "h-full flex flex-col bg-[#1D2025]",
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
