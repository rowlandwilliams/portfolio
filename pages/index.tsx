import { ReactElement } from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { HomeGraph } from "../components/HomeGraph/HomeGraph";

const Home = () => {
  return <HomeGraph />;
};

Home.getLayout = (page: ReactElement) => (
  <BaseLayout noPadding>{page}</BaseLayout>
);

export default Home;
