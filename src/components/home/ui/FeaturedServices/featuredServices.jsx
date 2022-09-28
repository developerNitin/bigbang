import Image1 from "../assets/sample-img-5.jpg";
import Image2 from "../assets/sample-img-2.jpg";
import Image3 from "../assets/sample-img-3.jpg";

import "./style/featuredServices.css";

import { MdOutlineDoubleArrow } from "react-icons/md";

export default function FeaturedServices() {
  return (
    <div className="page featured-services">
      <div className="featured-services-wrap">
        <div className="featured-services-wrap-first-child">
          <div className="featured-services-wrap-first-child-wrap">
            <h1 className="h1">POPULAR PROFASSIONAL SERVICES</h1>
            <h3 className="h1">
              {/* <span>
                <MdOutlineDoubleArrow />
              </span> */}
              The best for every budget
            </h3>
            <div className="featured-services-wrap-first-child-wrap-paragraph">
              {/* <span>
                <MdOutlineDoubleArrow />
              </span> */}
              <p className="line-height-24px p">
                Find high-quality serive at every price point. No hourly rates,
                just project-based pricing. Find high-quality serive at every
                price point. No hourly rates, just project-based pricing. Find
                high-quality serive at every price point. No hourly rates, just
                project-based pricing.
              </p>
            </div>
            <button className="button-styling">EXPLORE SERVICES</button>
          </div>
        </div>
        <div className="featured-services-wrap-second-child">
          <div className="featured-services-wrap-second-child-first-child">
            <img src={Image1} />
          </div>
          <div className="featured-services-wrap-second-child-second-child">
            <div className="featured-services-wrap-second-child-second-child-first-child">
              <img src={Image2} />
            </div>
            <div className="featured-services-wrap-second-child-second-child-second-child">
              <img src={Image3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
