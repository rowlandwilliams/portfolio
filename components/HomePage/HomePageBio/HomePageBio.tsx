import { HomePageBioLinks } from "./HomePageBioLinks/HomePageBioLinks";
import { HomePageBioText } from "./HomePageBioText/HomePageBioText";

export const HomePageBio = () => {
  return (
    <article className="space-y-4 text-gray-100">
      <HomePageBioText />
      <HomePageBioLinks />
    </article>
  );
};
