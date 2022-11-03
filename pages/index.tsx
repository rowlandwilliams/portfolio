import { ReactElement } from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

const Home = () => {
  return <div>home yo!!mwleklnoi</div>;
};

Home.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export default Home;
