import { HomePageBio } from "./HomePageBio/HomePageBio";
import { RadarChartSvg } from "./RadarChartSvg/RadarChartSvg";

export const HomePage = () => {
  return (
    <section className="flex-grow flex flex-col-reverse lg:flex-row justify-between gap-12">
      <RadarChartSvg />
      <HomePageBio />
    </section>
  );
};
