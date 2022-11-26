import { HomePageBio } from "./HomePageBio/HomePageBio";
import { HomePageDummyBrowser } from "./HomePageDummyBrowser/HomePageDummyBrowser";

export const HomePage = () => {
  return (
    <section className="flex-grow flex flex-col-reverse lg:flex-row justify-between gap-12">
      <HomePageDummyBrowser />
      <HomePageBio />
    </section>
  );
};
