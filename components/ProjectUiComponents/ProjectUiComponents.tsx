import { UiSectionWithMargin } from "../SHARED/UiSectionWithMargin/UiSectionWithMargin";
import { ClusterAnalysis } from "./ClusterAnalysis/ClusterAnalysis";

interface Props {
  name: string | null | undefined;
}

const getProjectUiComponents = (name: string | null | undefined) => {
  switch (name) {
    case "Cluster Analysis":
      return <ClusterAnalysis />;

    case "Stock chart":
      return (
        <iframe
          src="https://rowlandwilliams.github.io/stock-chart/"
          className="flex-grow rounded-lg"
        ></iframe>
      );

    case "Migration Sankey":
      return (
        <iframe
          src="https://migration-sankey.vercel.app/"
          className="flex-grow rounded-lg"
        ></iframe>
      );

    case "Co2 levels":
      return (
        <iframe
          src="https://co2widget.com/embed/index.html"
          className="h-[600px] bg-white rounded-lg"
        ></iframe>
      );

    case "Voronoi Generator":
      return (
        <iframe
          src="https://rowlandwilliams.github.io/voronoi/"
          className="h-[600px] rounded-lg"
        ></iframe>
      );
    default:
      return <div></div>;
  }
};

export const ProjectUiComponents = ({ name }: Props) => {
  const uiComponents = getProjectUiComponents(name);

  return (
    <UiSectionWithMargin className="h-[700px] rounded-lg overflow-hidden" yPadding>
      {uiComponents}
    </UiSectionWithMargin>
  );
};
