import "./style/userprofile.css";
import Review from "../../ui/review/review";
import { Link } from "react-router-dom";

const Userprofile = (props) => (
  <div className="user-profile">
    <div className="cover-img">
      <div className="cover-img-container">
        <img src={props.coverimg} />
      </div>
    </div>
    <div className="page user-profile-wrap">
      <div className="user-detail">
        <div className="user-detail-wrap">
          <div className="user-img">
            <img src={props.profileimage} />
          </div>
          <div className="user-detail-wrap-second-child">
            <h2 className="h1">{props.title} | logo designer</h2>
            <h1 className="h1 user-name">{props.name}</h1>
          </div>
          <div className="user-detail-links">
            <Link to="" className="button-styling follow-me">
              CONTACT ME
            </Link>
            <Link to="" className="button-styling-2">
              FOLLOW
            </Link>
          </div>
        </div>
      </div>

      <div className="user-works">
        <div className="user-works-heading">
          <h1 className="h1">
            PROJECTS<span>{props.products.length}</span>
          </h1>
        </div>
        <hr className="hr" />
        <div className="user-project-wrap">
          {props.products.map((i, idx) => {
            return (
              <div key={idx} className="user-project border">
                <div className="user-project-image-wrap">
                  <Link className="a" to={i.url}>
                    <img className=" user-project-img" src={i.image[0]} />
                  </Link>
                </div>
                <div className="user-project-info">
                  <div className="user-project-info-child">
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
            );
          })}
        </div>
      </div>
      <Review />
    </div>
  </div>
);

export default Userprofile;
