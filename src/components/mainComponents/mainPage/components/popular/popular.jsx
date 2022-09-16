import Image1 from "../assets/sample-img-5.jpg";
import Image2 from "../assets/sample-img-2.jpg";
import Image3 from "../assets/sample-img-3.jpg";

import "./styling/popular.css";

import { MdOutlineDoubleArrow } from "react-icons/md";

export default function Popular() {
  return (
    <div className="page popular">
      <div className="popular-wrap">
        <div className="popular-wrap-first-child">
          <div className="popular-wrap-first-child-wrap">
            <h1 className="h1">Popular Profassional Serives</h1>
            <h3 className="h1">
              <span><MdOutlineDoubleArrow /></span>The best for every budget
            </h3>
            <p className="line-height-24px p">Find high-quality serive at every price point. No hourly rates, just project-based pricing. Find high-quality serive at every price point. No hourly rates, just project-based pricing. Find high-quality serive at every price point. No hourly rates, just project-based pricing.</p>
            </div>
        </div>
        <div className="popular-wrap-second-child">
          <div className="popular-wrap-second-child-first-child">
            <img src={Image1} />
          </div>
          <div className="popular-wrap-second-child-second-child">
            <div className="popular-wrap-second-child-second-child-first-child">
              <img src={Image2} />
            </div>
            <div className="popular-wrap-second-child-second-child-second-child">
              <img src={Image3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
