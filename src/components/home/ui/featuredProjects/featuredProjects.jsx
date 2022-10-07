import "./style/featuredProjects.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Userdata from "../../../../userdata";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  const FeaturedProjects = Userdata.map(({ products }) => products).flat();

  return (
    <div className="page featured-projects">
      <div className="user-works">
        <div className="user-works-heading">
          <h1 className="h1">FEATURED PROJECTS</h1>
          <Link to="" className="button-styling">
            <span>EXPLORE MORE</span>
          </Link>
        </div>
        <div className="featured-projects-body">
          <div className="suggested-project-scroll-icons-1">
            <button className="button-styling suggested-project-scroll-icons-1-button">
              <MdKeyboardArrowLeft />
            </button>
          </div>
          <div className="user-project-wrap">
            {FeaturedProjects.slice(9, 14).map((i, idx) => (
              <div key={idx} className="user-project">
                <Link className="a" to={i.url}>
                  <div className="user-project-image-wrap">
                    <img className="user-project-img" src={i.image[0]} />
                  </div>
                </Link>
                <div className="user-project-info">
                  <div>
                    <p className="p">
                      <Link className="a" to={i.url}>
                        {i.heading}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="user-project-detail">
                  <Link className="a" to={i.parenturl}>
                    <div>
                      <img src={i.image[0]} />
                    </div>
                    <h1 className="h1 user-project-heading">{i.name}</h1>
                  </Link>
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
    </div>
  );
}
