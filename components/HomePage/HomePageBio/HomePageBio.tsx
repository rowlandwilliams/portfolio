import { HomePageBioLinks } from "./HomePageBioLinks/HomePageBioLinks";
import { HomePageBioText } from "./HomePageBioText/HomePageBioText";

export const HomePageBio = () => {
  return (
    <article className="space-y-6 text-gray-100 lg:py-16 lg:px-24">
      <HomePageBioText />
      <HomePageBioLinks />
    </article>
  );
};
