import "./styling/userprofile.css";

import Sampleimg from "./userdata/sample-profile-picture.png";
import Sampleimg2 from "./userdata/sample-product-img.png";

function Userprofile(props) {
  return (
    <div className="user-profile">
      <div className="cover-img">
        <div className="cover-img-container">
          <img src={props.coverimg} />
        </div>
      </div>
      <div className="page user-detail">
        <div className="user-info">
          <div className="user-img">
            <img src={Sampleimg} />
          </div>
          <h1 className="h1 user-name">{props.name}</h1>
          <ul className="ul title">
            <li>{props.title}</li>
            <li>Since: {props.since}</li>
            <li>
              <a className="a">{props.website}</a>
            </li>
          </ul>
          <p className="p location">
            <a className="a">{props.location}</a>
          </p>
          <div className="user-detail-links">
              <a className="a button-styling follow-me">CONTACT ME</a>
              <a className="a button-styling-2">FOLLOW</a>
          </div>
          {/* <p className="p description">
            Description: <span>{props.description}</span>
          </p> */}
        </div>
        <div className="user-works">
          <h1 className="h1 user-works-heading">Works</h1>
          <div className="user-project-wrap">
            {props.products.map((i, idx) => {
              return (
                <div key={idx} className="user-project border">
                  <a>
                    <img className="user-project-img" src={Sampleimg2} />
                    <div className="user-project-detail">
                      <h1 className="h1 user-project-heading">{i.heading}</h1>
                      <p className="p user-project-title">{i.title}</p>
                      <div className="user-project-pricing">
                        <span>Pricing:</span>
                        <span>{i.pricing}</span>
                      </div>
                    </div>
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
