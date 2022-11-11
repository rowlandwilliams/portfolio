import { ProjectTemplateOverviewTag } from "./ProjectTemplateOverviewTag/ProjectTemplateOverviewTag";

interface Props {
  options: (string | null | undefined)[];
  borderColorClass: string;
}

export const ProjectTemplateOverviewTags = ({
  options,
  borderColorClass,
}: Props) => {
  return (
    <div className="text-xs max-w-[300px] flex gap-2 flex-wrap text-gray-300">
      {options.map((option) => (
        <ProjectTemplateOverviewTag
          text={option}
          borderColorClass={borderColorClass}
          key={option}
        />
      ))}
    </div>
  );
};
