import DiscoverMore from "../HomePageSections/DiscoverMore/DiscoverMore";
import HowItWorks from "../HomePageSections/HowItWorks/HowItWorks";
import NewArrivals from "../HomePageSections/NewArrivals/NewArrivals";
import ShopBydepartment from "../HomePageSections/ShopBydepartment/ShopBydepartment";
import TopBanner from "../HomePageSections/TopBanner/TopBanner";
import TrendingNow from "../HomePageSections/TrendingNow/TrendingNow";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <DiscoverMore></DiscoverMore>
      <NewArrivals></NewArrivals>
      <HowItWorks></HowItWorks>
      <TrendingNow></TrendingNow>
      <ShopBydepartment></ShopBydepartment>
    </div>
  );
};

export default Home;
