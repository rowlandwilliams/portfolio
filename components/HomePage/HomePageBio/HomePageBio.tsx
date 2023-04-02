import { HomePageBioLinks } from "./HomePageBioLinks/HomePageBioLinks";
import { HomePageBioText } from "./HomePageBioText/HomePageBioText";

export const HomePageBio = () => {
  return (
    <article className="space-y-6 text-gray-100 sm:py-16">
      <HomePageBioText />
      <HomePageBioLinks />
    </article>
  );
};
