import "./style/suggestion.css";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Userdata from "../../userdata";
import { Link } from "react-router-dom";

export default function suggestion({ parentindex, index }) {
  return (
    <div className="suggested-project-parent">
      <div className="page suggested-project">
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
                <Link className="a" to={i.url}>
                  <div className="suggested-project-img-wrap-wrap">
                    <img className="image-ani" src={i.image[0]} />
                  </div>
                </Link>
                <div className="user-project-info">
                  <div>
                    <p className="p">
                      <Link className="a" to={i.url}>
                        {i.heading}
                      </Link>
                    </p>
                    <p className="p">
                      <Link className="a" to={i.parenturl}>
                        {i.name}
                      </Link>
                    </p>
                  </div>
                </div>
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
