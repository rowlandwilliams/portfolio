import { useState } from "react";
import { DummyBrowserTabs } from "../../../types";
import { ClusterAnalysis } from "../../ProjectUiComponents/ClusterAnalysis/ClusterAnalysis";
import { HomePageDummyBrowserHeader } from "./HomePageDummyBrowserHeader/HomePageDummyBrowserHeader";

const tabs: DummyBrowserTabs = [
  {
    title: "Cluster Analyzer",
    iconName: "cluster-analysis",
    component: <ClusterAnalysis />,
  },
  {
    title: "Stock Chart",
    iconName: "cluster-analysis",
    component: (
      <iframe
        src="https://rowlandwilliams.github.io/stock-chart/"
        className="flex-grow"
      ></iframe>
    ),
  },
  {
    title: "Sankey",
    iconName: "cluster-analysis",
    component: (
      <iframe
        src="https://migration-sankey.vercel.app/"
        className="flex-grow"
      ></iframe>
    ),
  },
];

export const HomePageDummyBrowser = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab: {
    title: string;
    iconName: string;
    component: JSX.Element;
  }) => setActiveTab(tab);

  const { component } = activeTab;
  return (
    <section className="h-[600px] md:h-auto flex-grow rounded-xl overflow-hidden border-t border-x border-y border-gray-700 flex flex-col flex-shrink-0 md:w-7/12">
      <HomePageDummyBrowserHeader
        tabs={tabs}
        handleClick={handleClick}
        activeTab={activeTab}
      />
      {component}
    </section>
  );
};
