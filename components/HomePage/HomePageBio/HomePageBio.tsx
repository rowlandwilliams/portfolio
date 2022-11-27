import { HomePageBioLinks } from "./HomePageBioLinks/HomePageBioLinks";
import { HomePageBioMenu } from "./HomePageBioMenu/HomePageBioMenu";
import { HomePageBioText } from "./HomePageBioText/HomePageBioText";

export const HomePageBio = () => {
  return (
    <article className="space-y-4 text-gray-100">
      <HomePageBioText />
      <HomePageBioMenu />
      <HomePageBioLinks />
    </article>
  );
};
