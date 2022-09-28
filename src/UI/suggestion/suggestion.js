import "./style/suggestion.css";
import Sampleimg1 from "../../assets/sample-img-1.jpg";


import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Userdata from "../../userdata";

export default function suggestion() {
  return (
    <div className="suggested-project-parent">
      <div className="suggested-project">
        <div className="suggested-project-scroll-icons-1">
          <button className="button-styling suggested-project-scroll-icons-1-button">
            <MdKeyboardArrowLeft />
          </button>
        </div>

        <div className="suggested-project-wrap">
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img className="image-ani" src={Sampleimg1} />
            </a>
          </div>
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img className="image-ani" src={Sampleimg1} />
            </a>
          </div>
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img className="image-ani" src={Sampleimg1} />
            </a>
          </div>
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img className="image-ani" src={Sampleimg1} />
            </a>
          </div>
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img className="image-ani" src={Sampleimg1} />
            </a>
          </div>
          <div className="suggested-project-img-wrap">
            <a className="a">
              <img className="image-ani" src={Sampleimg1} />
            </a>
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
