import { AllDesignProjectFieldsFragment } from "../../graphql/generated";
import { DesignGridThumbnail } from "./DesignGridThumbnail/DesignGridThumbnail";

interface Props {
  designProjects: AllDesignProjectFieldsFragment[];
}

export const DesignGrid = ({ designProjects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {designProjects.map((designProject, i) => (
        <DesignGridThumbnail
          designProject={designProject}
          priority={i < 3}
          key={designProject._id}
        />
      ))}
    </div>
  );
};
