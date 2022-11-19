import Image from "next/image";
import { DummyBrowserTab } from "../../../../../types";
import { HomePageDummyBrowserHeaderSearchBarArrowsAndRefresh } from "./HomePageDummyBrowserHeaderSearchBarArrowsAndRefresh/HomePageDummyBrowserHeaderSearchBarArrowsAndRefresh";

interface Props {
  activeTab: DummyBrowserTab;
}

export const HomePageDummyBrowserHeaderSearchBar = ({ activeTab }: Props) => {
  const { placeholder } = activeTab;

  return (
    <div className="bg-gray-200 px-3 h-10 flex items-center gap-x-3 text-gray-400 ">
      <HomePageDummyBrowserHeaderSearchBarArrowsAndRefresh />
      <div className="flex gap-x-2 w-full items-center">
        <div className="rounded-2xl flex-grow flex items-center px-2 bg-white h-6 gap-x-2 text-gray-600">
          <Image src="/info.svg" width={15} height={15} alt="info" />
          <input
            placeholder={placeholder}
            className="w-full py-1 focus:outline-none placeholder-gray-600"
          ></input>
        </div>
        <Image src="/home/more-dots.svg" width={16} height={16} alt="more" />
      </div>
    </div>
  );
};
