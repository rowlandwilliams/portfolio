import { ProjectsNavBarOption } from "./ProjectsNavBarOption/ProjectsNavBarOption";

interface Props {
  navBarOptions: string[];
  activeOption: string;
  handleClick: (option: string) => void;
}

export const ProjectsNavBar = ({
  navBarOptions,
  activeOption,
  handleClick,
}: Props) => {
  return (
    <section className="flex justify-end border-b pb-2 border-gray-600">
      <nav className="flex gap-x-2">
        {navBarOptions.map((navBarOption) => (
          <ProjectsNavBarOption
            navBarOption={navBarOption}
            activeOption={activeOption}
            handleClick={handleClick}
            key={navBarOption}
          />
        ))}
      </nav>
    </section>
  );
};
