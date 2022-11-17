import { ReactElement } from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { ClusterAnalysis } from "../components/ProjectUiComponents/ClusterAnalysis/ClusterAnalysis";
import { UiSectionWithMargin } from "../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";

const Home = () => {
  return (
    <section className="bg-gradient-to-t from-dark-gray to-indigo-600">
      <UiSectionWithMargin yPadding className=" md:h-screen animate-fade-in-down">
        <section className="flex flex-col-reverse md:flex-row justify-between h-full mb-12 py-12 gap-12">
          <section className="h-[1000px] md:h-auto flex-grow rounded-md overflow-hidden border-t border-x border-y border-gray-700 flex flex-col flex-shrink-0 md:w-7/12">
            <div className="">
              <div className="bg-gray-400 flex items-end">
                <section className="flex h-full items-center gap-x-2 p-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                </section>
                <div className="bg-gray-200 w-44 h-8 rounded-t-lg p-2 text-gray-600">
                  suh
                </div>
                <div className="bg-gray-400 w-44 h-8 ">suh</div>
              </div>
              <div className="bg-gray-200 p-4 h-10"></div>
            </div>
            <ClusterAnalysis />
          </section>
          <section className="text-2xl font-medium space-y-4 text-gray-100">
            <h1>Welcome</h1>
            <h2>I&apos;m a Software Engineer and designer.</h2>
            <h3>
              I connect, data, design and technology to build apps that explore
              and visualise complex information.
            </h3>
          </section>
        </section>
      </UiSectionWithMargin>
    </section>
  );
};

Home.getLayout = (page: ReactElement) => (
  <BaseLayout noPadding>{page}</BaseLayout>
);

export default Home;
