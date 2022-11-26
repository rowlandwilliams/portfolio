import { ReactElement } from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { HomePage } from "../components/HomePage/HomePage";
import { UiSectionWithMargin } from "../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";

const Home = () => {
  return (
    <UiSectionWithMargin className="flex-grow animate-fade-in-down">
      <HomePage />
    </UiSectionWithMargin>
  );
};

Home.getLayout = (page: ReactElement) => <BaseLayout padTop>{page}</BaseLayout>;

export default Home;
