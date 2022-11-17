import { UiSectionWithMargin } from "../SHARED/UiSectionWithMargin/UiSectionWithMargin";
import { ClusterAnalysis } from "./ClusterAnalysis/ClusterAnalysis";

interface Props {
  name: string | null | undefined;
}

const getProjectUiComponents = (name: string | null | undefined) => {
  switch (name) {
    case "Cluster Analysis":
      return <ClusterAnalysis />;

    default:
      return <div>ui compn</div>;
  }
};

export const ProjectUiComponents = ({ name }: Props) => {
  const uiComponents = getProjectUiComponents(name);

  return (
    <UiSectionWithMargin className="h-screen" yPadding>
      {uiComponents}
    </UiSectionWithMargin>
  );
};
