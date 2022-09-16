import "./styling/mainPage.css";

//elements
import Banner from "./components/banner/banner";
import Popular from "./components/popular/popular";
import Featured from "./components/featured/featured";


const MainPage = () => {
  return (
    <div className="main-page">
      <Banner/>
      <Popular/>
      <Featured/>
    </div>
  );
};

export default MainPage;
