import "./style/userprofile.css";
import Review from "../../UI/review/review";

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
            <a className="button-styling follow-me">CONTACT ME</a>
            <a className="button-styling-2">FOLLOW</a>
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
                <a className="a" href={i.url}>
                  <div className="user-project-image-wrap">
                    <img className=" user-project-img" src={i.image[0]} />
                  </div>
                </a>
                <div className="user-project-info">
                  <div>
                    <p className="p">
                      <a className="a" href={i.url}>
                        {i.heading}
                      </a>
                    </p>
                    <p className="p">
                      <a className="a" href={i.parenturl}>
                        {i.name}
                      </a>
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
