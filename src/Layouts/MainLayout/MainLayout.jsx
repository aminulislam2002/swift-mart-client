import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/SharedPages/NavBar/NavBar";
import Footer from "../../Pages/SharedPages/Footer/Footer";
import PromoSection from "../../Pages/SharedPages/PromoSection/PromoSection ";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <PromoSection></PromoSection>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
