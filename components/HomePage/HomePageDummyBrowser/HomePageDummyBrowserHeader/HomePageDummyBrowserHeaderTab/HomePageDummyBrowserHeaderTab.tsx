import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { DummyBrowserTab } from "../../../../../types";
import { HomePageDummyBrowserHeaderTabClose } from "./HomePageDummyBrowserHeaderTabClose/HomePageDummyBrowserHeaderTabClose";

interface Props {
  tab: {
    title: string;
    iconName: string;
    component: JSX.Element;
  };
  handleClick: (tab: {
    title: string;
    iconName: string;
    component: JSX.Element;
  }) => void;
  activeTab: DummyBrowserTab;
}

export const HomePageDummyBrowserHeaderTab = ({
  tab,
  handleClick,
  activeTab,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);

  const { title, iconName } = tab;

  const active = activeTab.title === title;

  return (
    <button
      type="button"
      className={classNames(
        " w-44 h-8 rounded-t-lg px-3 py-2 text-gray-800 flex gap-x-2 items-center justify-between relative",
        {
          "bg-gray-200": active,
          "hover:bg-gray-300 hover:bg-opacity-20": !active,
        }
      )}
      onClick={() => handleClick(tab)}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="flex gap-x-2">
        <Image
          src={`/home/${iconName}.svg`}
          width={16}
          height={16}
          alt={iconName}
        />
        {title}
      </div>
      <HomePageDummyBrowserHeaderTabClose />
      {!active && !hovered && (
        <div className="absolute h-5 w-[0.75px] bg-gray-600 right-0" />
      )}
    </button>
  );
};
