import "./style/suggestion.css";
import Sampleimg1 from "../../assets/sample-img-1.jpg";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Userdata from "../../userdata";

export default function suggestion({ parentindex, index }) {
  return (
    <div className="suggested-project-parent">
      <div className="suggested-project">
        <div className="suggested-project-scroll-icons-1">
          <button className="button-styling suggested-project-scroll-icons-1-button">
            <MdKeyboardArrowLeft />
          </button>
        </div>

        <div className="suggested-project-wrap">
          {Userdata[parentindex].products
            .filter((array) => array != Userdata[parentindex].products[index])
            .slice(0, 8)
            .map((i, idx) => (
              <div key={idx} className="suggested-project-img-wrap">
                <a className="a" href={"/" + i.url}>
                  <img className="image-ani" src={i.image[0]} />
                </a>
              </div>
            ))}
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
