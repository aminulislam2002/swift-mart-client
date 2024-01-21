import DiscoverMore from "../HomePageSections/DiscoverMore/DiscoverMore";
import NewArrivals from "../HomePageSections/NewArrivals/NewArrivals";
import TopBanner from "../HomePageSections/TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <DiscoverMore></DiscoverMore>
      <NewArrivals></NewArrivals>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
