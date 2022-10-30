import { useState } from "react";
import { Project } from "../../types/projects";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";
import { ProjectsMap } from "./ProjectsMap/ProjectsMap";
import { ProjectsNavBar } from "./ProjectsNavBar/ProjectsNavBar";
import { ProjectsNetwork } from "./ProjectsNetwork/ProjectsNetwork";
import { ProjectsTimeline } from "./ProjectsTimeline/ProjectsTimeline";

const navBarOptions = ["grid", "timeline", "map", "network"];

interface Props {
  projects: Project[];
}

export const Projects = ({ projects }: Props) => {
  const [activeOption, setActiveOption] = useState(navBarOptions[0]);

  const handleClick = (option: string) => {
    setActiveOption(option);
  };

  const renderChildrenBasedOnActiveOption = () => {
    switch (activeOption) {
      case "grid":
        return <ProjectsGrid projects={projects} />;
      case "timeline":
        return <ProjectsTimeline />;
      case "map":
        return <ProjectsMap />;
      case "network":
        return <ProjectsNetwork />;
      default:
        return <ProjectsGrid projects={projects} />;
    }
  };

  const activeProjectsLayout = renderChildrenBasedOnActiveOption();

  return (
    <section className="space-y-2">
      <ProjectsNavBar
        navBarOptions={navBarOptions}
        handleClick={handleClick}
        activeOption={activeOption}
      />
      {activeProjectsLayout}
    </section>
  );
};
