import "./styling/userprofile.css";

import Sampleimg1 from "./assets/sample-img-5.jpg";
import Sampleimg2 from "./assets/sample-img-4.jpg";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Userprofile(props) {
  return (
    <div className="user-profile">
      {/* <div className="cover-img">
        <div className="cover-img-container">
          <img src={props.coverimg} />
        </div>
      </div> */}
      <div className="page user-profile-wrap">
        <div className="user-detail">
          <div className="user-detail-wrap">
            <div className="user-img">
              <img src={Sampleimg1} />
            </div>
            <div className="user-detail-wrap-second-child">
              <div className="user-detail-wrap-second-child-first-child">
                <h2 className="h1">{props.title} | logo designer</h2>
                <h1 className="h1 user-name">{props.name}</h1>
              </div>
              <div className="user-detail-links">
                <a className="button-styling follow-me">CONTACT ME</a>
                <a className="button-styling-2">FOLLOW</a>
              </div>
            </div>
            {/* <p className="p description">
            Description: <span>{props.description}</span>
          </p> */}
          </div>
          <div className="user-social-media-links">
            <ul className="ul user-social-media-links-wrap">
              <li className="facebook-link">
                <a className="button-styling-2 a">
                  <BsFacebook />
                </a>
              </li>
              <li className="instagram-link">
                <a className="button-styling-2 a">
                  <BsInstagram />
                </a>
              </li>
              <li className=" twitter-link">
                <a className="button-styling-2  a">
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="user-works">
          <div className="user-works-heading">
            <h1 className="h1">
              PROJECTS<span>169</span>
            </h1>
          </div>
          <hr className="hr" />
          <div className="user-project-wrap">
            {props.products.map((i, idx) => {
              return (
                <div key={idx} className="user-project border">
                  <a>
                    <div className="user-project-image-wrap">
                      <img className="image-ani user-project-img" src={Sampleimg2} />
                    </div>

                    {/* <div className="user-project-detail">
                      <h1 className="h1 user-project-heading">{i.heading}</h1>
                      <p className="p">{i.title}</p>
                      <div className="user-project-pricing">
                        <span>Pricing:</span>
                        <span>{i.pricing}</span>
                      </div>
                    </div> */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
