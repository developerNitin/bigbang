import "./style/featuredProjects.css";

import Sampleimg2 from "../assets/sample-img-2.jpg";
import Sampleimg3 from "../assets/sample-img-3.jpg";
import Sampleimg4 from "../assets/sample-img-4.jpg";
import Sampleimg5 from "../assets/sample-img-5.jpg";
import Sampleimg6 from "../assets/sample-img-6.jpg";

import Userdata from "../../../../userdata";

export default function FeaturedProjects() {
  const FeaturedProjects = Userdata.map(({ products }) => products).flat();

  return (
    <div className="page featured-projects">
      <div className="user-works">
        <div className="user-works-heading">
          <h1 className="h1">FEATURED PROJECTS</h1>
          <a className="button-styling">
            <span>EXPLORE MORE</span>
          </a>
        </div>
        <div className="user-project-wrap">
          {FeaturedProjects.slice(9, 14).map((i, idx) => (
            <div key={idx} className="user-project image-ani">
              <a className="" href={i.url}>
                <div className="user-project-image-wrap ">
                  <img className="user-project-img" src={i.image[0]} />
                </div>
              </a>
              <div className="user-project-info">
                <div>
                  <p className="p">
                    <a className="a" href={i.url}>
                      {i.heading}
                    </a>
                  </p>
                </div>
              </div>

              <div className="user-project-detail">
                <a className="a" href={i.parenturl}>
                  <div>
                    <img src={i.image[0]} />
                  </div>
                  <h1 className="h1 user-project-heading">{i.name}</h1>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
