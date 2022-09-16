import "./styling/featured.css";

import Sampleimg1 from "../assets/sample-img-1.jpg";
import Sampleimg2 from "../assets/sample-img-2.jpg";
import Sampleimg3 from "../assets/sample-img-3.jpg";
import Sampleimg4 from "../assets/sample-img-4.jpg";
import Sampleimg5 from "../assets/sample-img-5.jpg";
import Sampleimg6 from "../assets/sample-img-6.jpg";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Featured() {
  return (
    <div className="page featured-project">
      <div className="suggested-project">
        <div className="suggested-project-scroll-icons-1">
          <button className="button-styling suggested-project-scroll-icons-1-button">
            <MdKeyboardArrowLeft />
          </button>
        </div>

        <div className="suggested-project-wrap">
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img src={Sampleimg1} />
            </a>
            <div></div>
          </div>
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img src={Sampleimg2} />
            </a>
            <div></div>
          </div>
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img src={Sampleimg3} />
            </a>
            <div></div>
          </div>
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img src={Sampleimg4} />
            </a>
            <div></div>
          </div>
          <div className="suggested-project-img-wrap">
            <a children="a">
              <img src={Sampleimg5} />
            </a>
            <div></div>
          </div>
          <div className="suggested-project-img-wrap">
            <a>
              <img src={Sampleimg6} />
            </a>
            <div></div>
          </div>
        </div>

        <div className="suggested-project-scroll-icons-2">
          <button className="button-styling suggested-project-scroll-icons-2-button">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
