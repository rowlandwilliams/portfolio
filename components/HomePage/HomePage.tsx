import { HomePageBio } from "./HomePageBio/HomePageBio";
import { HomePageDummyBrowser } from "./HomePageDummyBrowser/HomePageDummyBrowser";

export const HomePage = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between h-full mb-12 py-12 gap-12">
      <HomePageDummyBrowser />
      <HomePageBio />
    </section>
  );
};
