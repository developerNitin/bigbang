import "./styling/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-heading">
          <h1 className="h1">
            Build Your Brand With
            Our Creative Marketplace
          </h1>
        </div>
        <div className="banner-text">
          <p className="p">
            Millions of talents and agencies around the world showcase their
            work on Bigbang.
          </p>
        </div>
        <div className="search-form">
          <form>
            <input></input>
            <a className="a button-styling">
              <span>SEARCH</span>
            </a>
          </form>
        </div>
        <div className="popular-tags">
          <ul className="ul">
            <li>
              <p className="p">Popular:</p>
            </li>
            <li>
              <a className="a button-styling-2">Web Developemt</a>
            </li>
            <li>
              <a className="a button-styling-2">App Development</a>
            </li>
            <li>
              <a className="a button-styling-2">Graphic Design</a>
            </li>
            <li>
              <a className="a button-styling-2">Digital Marketing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
