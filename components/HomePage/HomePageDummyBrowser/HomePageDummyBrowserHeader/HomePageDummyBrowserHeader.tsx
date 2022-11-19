import { DummyBrowserTab, DummyBrowserTabs } from "../../../../types";
import { HomePageDummyBrowserHeaderButtons } from "./HomePageDummyBrowserHeaderButtons/HomePageDummyBrowserHeaderButtons";
import { HomePageDummyBrowserHeaderSearchBar } from "./HomePageDummyBrowserHeaderSearchBar/HomePageDummyBrowserHeaderSearchBar";
import { HomePageDummyBrowserHeaderTab } from "./HomePageDummyBrowserHeaderTab/HomePageDummyBrowserHeaderTab";

interface Props {
  tabs: DummyBrowserTabs;
  handleClick: (tab: DummyBrowserTab) => void;
  activeTab: DummyBrowserTab;
}

export const HomePageDummyBrowserHeader = ({
  tabs,
  handleClick,
  activeTab,
}: Props) => {
  return (
    <section>
      <div className="bg-gray-400 flex items-end">
        <HomePageDummyBrowserHeaderButtons />
        {tabs.map((tab) => (
          <HomePageDummyBrowserHeaderTab
            key={tab.title}
            tab={tab}
            handleClick={handleClick}
            activeTab={activeTab}
          />
        ))}
      </div>
      <HomePageDummyBrowserHeaderSearchBar activeTab={activeTab} />
    </section>
  );
};
