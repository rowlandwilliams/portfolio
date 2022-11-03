import { useRouter } from "next/router";
import { BaseLayout } from "../BaseLayout/BaseLayout";
import { ProjectsGrid } from "../Projects/ProjectsGrid/ProjectsGrid";
import { ProjectsMap } from "../Projects/ProjectsMap/ProjectsMap";
import { ProjectsNavBar } from "../Projects/ProjectsNavBar/ProjectsNavBar";
import { ProjectsNetwork } from "../Projects/ProjectsNetwork/ProjectsNetwork";
import { ProjectsTimeline } from "../Projects/ProjectsTimeline/ProjectsTimeline";

export const ProjectsLayout = () => {
  const router = useRouter();
  const { query } = router;
  const { view } = query;

  const renderChildrenBasedOnActiveOption = () => {
    switch (view) {
      case "grid":
        return <ProjectsGrid />;
      case "timeline":
        return <ProjectsTimeline></ProjectsTimeline>;
      case "map":
        return <ProjectsMap />;
      case "network":
        return <ProjectsNetwork />;
    }
  };

  return (
    <BaseLayout>
      <section className="space-y-2 h-full flex flex-col">
        <ProjectsNavBar activeOption={query.view as string} />
        {renderChildrenBasedOnActiveOption()}
      </section>
    </BaseLayout>
  );
};
