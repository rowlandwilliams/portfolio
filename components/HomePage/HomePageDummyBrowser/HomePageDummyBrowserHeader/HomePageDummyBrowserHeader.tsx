import { HomePageDummyBrowserHeaderButtons } from "./HomePageDummyBrowserHeaderButtons/HomePageDummyBrowserHeaderButtons";
import { HomePageDummyBrowserHeaderSearchBar } from "./HomePageDummyBrowserHeaderSearchBar/HomePageDummyBrowserHeaderSearchBar";
import { HomePageDummyBrowserHeaderTab } from "./HomePageDummyBrowserHeaderTab/HomePageDummyBrowserHeaderTab";

export const HomePageDummyBrowserHeader = () => {
  return (
    <section>
      <div className="bg-gray-400 flex items-end">
        <HomePageDummyBrowserHeaderButtons />
        <HomePageDummyBrowserHeaderTab
          title="Cluster Analyzer"
          iconName="cluster-analysis"
        />
      </div>
      <HomePageDummyBrowserHeaderSearchBar />
    </section>
  );
};
