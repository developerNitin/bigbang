import "./style/banner.css";

import { GoSearch } from "react-icons/go";
// import { MdOutlineDoubleArrow } from "react-icons/md";

import image from "../assets/sample-img-5.jpg";

const Banner = () => {
  return (
    <div className="page banner">
      <div className="banner-wrap">
        <div className="banner-image">
          <div className="banner-image-wrap">
            <img src={image} />
          </div>
        </div>
        <div className="banner-wrap-first-child">
          <div className="banner-heading">
            <h1 className="h1">
              Build Your Brand With Our Creative Marketplace
            </h1>
          </div>
          <div className="banner-text">
            <p className="line-height-24px p">
              Millions of talents and agencies around the world showcase their
              work on Bigbang.
            </p>
          </div>
          <div className="search-form">
            <form>
              <figure>
                <GoSearch />
              </figure>
              <input className="border" placeholder="Search works..." />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
