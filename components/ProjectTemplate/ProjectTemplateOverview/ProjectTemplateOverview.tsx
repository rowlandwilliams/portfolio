import { PortableText } from "@portabletext/react";
import { ProjectFieldsFragment } from "../../../graphql/generated";
import { UiSectionWithMargin } from "../../SHARED/UiSectionWithMargin/UiSectionWithMargin";
import { ProjectTemplatePortableTextComponents } from "../ProjectTemplatePortableTextComponents/ProjectTemplatePortableTextComponents";
import { ProjectTemplateOverviewCompany } from "./ProjectTemplateOverviewCompany/ProjectTemplateOverviewCompany";
import { ProjectTemplateOverviewDeliverables } from "./ProjectTemplateOverviewDeliverables/ProjectTemplateOverviewDeliverables";
import { ProjectTemplateOverviewLocations } from "./ProjectTemplateOverviewLocations/ProjectTemplateOverviewLocations";
import { ProjectTemplateOverviewRole } from "./ProjectTemplateOverviewRole/ProjectTemplateOverviewRole";
import { ProjectTemplateOverviewTechnologies } from "./ProjectTemplateOverviewTechnologies/ProjectTemplateOverviewTechnologies";
import { ProjectTemplateOverviewTitleAndChildSection } from "./SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  project: ProjectFieldsFragment;
}

export const ProjectTemplateOverview = ({ project }: Props) => {
  const {
    name,
    summary,
    color,
    companyLogo,
    companyUrl,
    jobTitle,
    deliverables,
    technologies,
    locations,
    overviewRaw,
  } = project;

  const borderColorClass = `border-${color}`;
  const deliverablesHeaderText = jobTitle ? "Responsibilities" : "Deliverables";
  return (
    <UiSectionWithMargin yPadding className="h-screen">
      <h1 className="text-6xl text-white border-b border-gray-600 pb-8 animate-fade-in-down">
        {summary}
      </h1>
      <article className="py-8 grid grid-cols-2">
        <section className="space-y-8">
          <ProjectTemplateOverviewCompany
            companyLogo={companyLogo}
            companyUrl={companyUrl}
            name={name}
          />
          <ProjectTemplateOverviewRole jobTitle={jobTitle} />
          <ProjectTemplateOverviewDeliverables
            deliverables={deliverables}
            deliverablesHeaderText={deliverablesHeaderText}
            borderColorClass={borderColorClass}
          />
          <ProjectTemplateOverviewTechnologies
            technologies={technologies}
            borderColorClass={borderColorClass}
          />
          <ProjectTemplateOverviewLocations
            locations={locations}
            borderColorClass={borderColorClass}
          />
        </section>
        <ProjectTemplateOverviewTitleAndChildSection title="Overview">
          <PortableText
            value={overviewRaw}
            components={ProjectTemplatePortableTextComponents}
          />
        </ProjectTemplateOverviewTitleAndChildSection>
      </article>
    </UiSectionWithMargin>
  );
};
