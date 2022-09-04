import "./styling/userprofile.css";

import Sampleimg from "./userdata/sample-profile-picture.png";

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
          <img src={Sampleimg} />
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
          <ul className="ul contact-me">
            <li>
              <a className="a button-styling">Contact me</a>
            </li>
          </ul>
          {/* <p className="p description">
            Description: <span>{props.description}</span>
          </p> */}
        </div>
        <div className="user-works">
          <div className="user-works-container">
            <h1 className="h1 user-works-heading">Works</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
