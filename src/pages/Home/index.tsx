import Page from "../../components/Page";
import Banner from "./Banner";
import Sections from "./Sections";

const Home: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner />
      <Sections />
    </Page>
  );
};

export default Home;
