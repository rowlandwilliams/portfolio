import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  navBarOption: string;
  activeOption: string;
}

export const ProjectsNavBarOption = ({ navBarOption, activeOption }: Props) => {
  const active = navBarOption === activeOption;

  return (
    <Link
      href={{
        pathname: `/projects`,
        query: { view: navBarOption },
      }}
      className="relative"
    >
      <button
        type="button"
        className={classNames("border rounded-sm p-0.5", {
          "border-indigo-600": active,
          "border-gray-600": !active,
        })}
      >
        <Image
          src={`/${navBarOption}.svg`}
          width={22}
          height={22}
          key={navBarOption}
          alt={navBarOption}
          className={classNames({ "opacity-50 hover:opacity-80": !active })}
        />
      </button>
    </Link>
  );
};
