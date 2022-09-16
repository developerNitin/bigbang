import "./styling/mainPage.css";

//elements
import Banner from "./components/banner/banner";
import FeaturedServices from "./components/FeaturedServices/featuredServices";
import FeaturedProfiles from "./components/featuredProfiles/featuredProfiles";
import FeaturedProjects from "./components/featuredProjects/featuredProjects";

const MainPage = () => {
  return (
    <div className="main-page">
      <Banner />
      <FeaturedProjects/>
      <FeaturedServices />
      <FeaturedProfiles />
    </div>
  );
};

export default MainPage;
