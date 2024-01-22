import DiscoverMore from "../HomePageSections/DiscoverMore/DiscoverMore";
import HowItWorks from "../HomePageSections/HowItWorks/HowItWorks";
import NewArrivals from "../HomePageSections/NewArrivals/NewArrivals";
import TopBanner from "../HomePageSections/TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <DiscoverMore></DiscoverMore>
      <NewArrivals></NewArrivals>
      <HowItWorks></HowItWorks>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
