import { ReactElement } from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { HomePage } from "../components/HomePage/HomePage";
import { UiSectionWithMargin } from "../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";

const Home = () => {
  return (
    <section className="bg-gradient-to-t from-dark-gray to-indigo-600">
      <UiSectionWithMargin
        yPadding
        className=" md:h-screen animate-fade-in-down"
      >
        <HomePage />
      </UiSectionWithMargin>
    </section>
  );
};

Home.getLayout = (page: ReactElement) => (
  <BaseLayout noPadding>{page}</BaseLayout>
);

export default Home;
