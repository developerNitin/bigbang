import "./style/home.css";

//elements
import Banner from "./ui/banner/banner";
import FeaturedServices from "./ui/FeaturedServices/featuredServices";
import FeaturedProfiles from "./ui/featuredProfiles/featuredProfiles";
import FeaturedProjects from "./ui/featuredProjects/featuredProjects";

const MainPage = () => {
  return (
    <div className="main-page">
      <Banner />
      <hr className="hr" />
      <FeaturedProjects />
      <hr className="hr" />
      <FeaturedServices />
      <hr className="hr" />
      <FeaturedProfiles />
    </div>
  );
};

export default MainPage;
