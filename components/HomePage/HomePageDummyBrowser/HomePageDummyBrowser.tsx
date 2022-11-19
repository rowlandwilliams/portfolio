import { ClusterAnalysis } from "../../ProjectUiComponents/ClusterAnalysis/ClusterAnalysis";
import { HomePageDummyBrowserHeader } from "./HomePageDummyBrowserHeader/HomePageDummyBrowserHeader";

export const HomePageDummyBrowser = () => {
  return (
    <section className="h-[600px] md:h-auto flex-grow rounded-md overflow-hidden border-t border-x border-y border-gray-700 flex flex-col flex-shrink-0 md:w-7/12">
      <HomePageDummyBrowserHeader />
      <ClusterAnalysis />
    </section>
  );
};
