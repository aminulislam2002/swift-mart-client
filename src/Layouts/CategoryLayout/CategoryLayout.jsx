import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/SharedPages/NavBar/NavBar";
import Footer from "../../Pages/SharedPages/Footer/Footer";

const CategoryLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default CategoryLayout;
