import { useState } from "react";
import { DummyBrowserTab, DummyBrowserTabs } from "../../../types";
import { ClusterAnalysis } from "../../ProjectUiComponents/ClusterAnalysis/ClusterAnalysis";
import { HomePageDummyBrowserHeader } from "./HomePageDummyBrowserHeader/HomePageDummyBrowserHeader";

const tabs: DummyBrowserTabs = [
  {
    title: "Cluster Analyzer",
    iconName: "cluster-analysis",
    placeholder: "drag-the-green.square",
    component: <ClusterAnalysis />,
  },
  {
    title: "Stock Chart",
    iconName: "stock-chart",
    placeholder: "drag-the-bottom.chart",
    component: (
      <iframe
        src="https://rowlandwilliams.github.io/stock-chart/"
        className="flex-grow"
      ></iframe>
    ),
  },
  {
    title: "Sankey",
    iconName: "sankey",
    placeholder: "hover-over-links-and-click-the.nodes",
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

  const handleClick = (tab: DummyBrowserTab) => setActiveTab(tab);

  const { component } = activeTab;
  return (
    <section className="h-[700px] md:h-[500px] lg:h-auto flex-grow rounded-xl overflow-hidden border-t border-x border-y border-gray-700 flex flex-col flex-shrink-0 lg:w-7/12">
      <HomePageDummyBrowserHeader
        tabs={tabs}
        handleClick={handleClick}
        activeTab={activeTab}
      />
      {component}
    </section>
  );
};
