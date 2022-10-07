import "./style/featuredProfiles.css";

import {Link} from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Userdata from "../../../../userdata";

export default function Featured() {
  return (
    <div className="page featured-profiles">
      <div className="featured-profiles-heading">
        <h1 className="h1">FEATURED PROFILES</h1>
        <Link to="" className="a button-styling">
          <span>EXPLORE MORE</span>
        </Link>
      </div>
      <div className="suggested-profiles">
        <div className="suggested-profiles-scroll-icons-1">
          <button className="button-styling suggested-profiles-scroll-icons-1-button">
            <MdKeyboardArrowLeft />
          </button>
        </div>

        <div className="suggested-profiles-wrap">
          {Userdata.map((i, idx) => (
            <div key={idx} className="border suggested-profiles-wrap-data">
              <Link className="a" to={i.url}>
                <div className="suggested-profiles-img-wrap image-ani">
                  <img src={i.image[0]} />
                </div>
              </Link>
              <div className="suggested-profiles-user-profile">
                <div className="suggested-profiles-user-profile-image">
                  <Link to={i.url}><img src={i.profileimage} /></Link>
                </div>
                <div>
                  <h3 className="h1">{i.title}</h3>
                  <p className="p">
                    <Link className="a" to={i.url}>{i.name}</Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="suggested-profiles-scroll-icons-2">
          <button className="button-styling suggested-profiles-scroll-icons-2-button">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
