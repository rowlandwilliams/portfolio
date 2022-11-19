import Image from "next/image";
import { ClusterAnalysis } from "../../ProjectUiComponents/ClusterAnalysis/ClusterAnalysis";

export const HomePageDummyBrowser = () => {
  return (
    <section className="h-[600px] md:h-auto flex-grow rounded-md overflow-hidden border-t border-x border-y border-gray-700 flex flex-col flex-shrink-0 md:w-7/12">
      <div className="">
        <div className="bg-gray-400 flex items-end">
          <section className="flex h-full items-center gap-x-2 p-4">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
          </section>
          <div className="bg-gray-200 w-44 h-8 rounded-t-lg p-2 text-gray-600">
            Cluster Analyzer
          </div>
        </div>
        <div className="bg-gray-200 p-4 h-10 flex items-center gap-x-3 text-gray-400 ">
          <span className="text-xl">{"<-"}</span>
          <span className="text-xl">{"->"}</span>
          <div className="rounded-2xl flex-grow flex items-center px-2 bg-white h-6 gap-x-2 text-gray-600">
            <Image src="/info.svg" width={15} height={15} alt="info" />
            <p>cluster.analysis</p>
          </div>
        </div>
      </div>
      <ClusterAnalysis />
    </section>
  );
};
