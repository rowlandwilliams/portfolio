import { ProjectsNavBarOption } from "./ProjectsNavBarOption/ProjectsNavBarOption";

interface Props {
  activeOption: string;
}
const navBarOptions = ["grid"];

export const ProjectsNavBar = ({ activeOption }: Props) => {
  return (
    <section className="flex justify-end border-b pb-2 border-gray-600">
      <nav className="flex gap-x-2">
        {navBarOptions.map((navBarOption) => (
          <ProjectsNavBarOption
            navBarOption={navBarOption}
            activeOption={activeOption}
            key={navBarOption}
          />
        ))}
      </nav>
    </section>
  );
};
