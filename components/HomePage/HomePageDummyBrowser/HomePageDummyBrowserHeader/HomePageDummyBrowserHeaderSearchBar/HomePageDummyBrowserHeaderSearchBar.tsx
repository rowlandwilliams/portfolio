import Image from "next/image";
import { HomePageDummyBrowserHeaderSearchBarArrows } from "./HomePageDummyBrowserHeaderSearchBarArrows/HomePageDummyBrowserHeaderSearchBarArrows";

export const HomePageDummyBrowserHeaderSearchBar = () => {
  return (
    <div className="bg-gray-200 px-3 h-10 flex items-center gap-x-3 text-gray-400 ">
      <HomePageDummyBrowserHeaderSearchBarArrows />
      <div className="rounded-2xl flex-grow flex items-center px-2 bg-white h-6 gap-x-2 text-gray-600">
        <Image src="/info.svg" width={15} height={15} alt="info" />
        <input
          placeholder="drag-the-green.square"
          className="w-full py-1 focus:outline-none placeholder-gray-600"
        ></input>
      </div>
    </div>
  );
};
