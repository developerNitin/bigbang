import "./styling/featuredProjects.css";

import Sampleimg2 from "../assets/sample-img-2.jpg";
import Sampleimg3 from "../assets/sample-img-3.jpg";
import Sampleimg4 from "../assets/sample-img-4.jpg";
import Sampleimg5 from "../assets/sample-img-5.jpg";
import Sampleimg6 from "../assets/sample-img-6.jpg";

export default function FeaturedProjects() {
  const FeaturedProjects = [
    {
      img: Sampleimg2,
      heading: "Bigbang",
      title: "Creative website",
      pricing: "200$",
    },
    {
      img: Sampleimg3,
      heading: "hello",
      title: "Creative website",
      pricing: "200$",
    },
    {
      img: Sampleimg4,
      heading: "Bigboss",
      title: "Creative website",
      pricing: "200$",
    },
    {
      img: Sampleimg5,
      heading: "Bigboss",
      title: "Creative website",
      pricing: "200$",
    },
    {
      img: Sampleimg6,
      heading: "Bigboss",
      title: "Creative website",
      pricing: "200$",
    },
  ];
  return (
    <div className="page featured-projects">
      <div className="user-works">
        <div className="user-works-heading">
          <h1 className="h1">FEATURED PROJECTS</h1>
          <a className="button-styling-2">
            <span>EXPLORE MORE</span>
          </a>
        </div>
        <div className="user-project-wrap">
          {FeaturedProjects.map((i, idx) => {
            return (
              <div key={idx} className="user-project border">
                <a>
                  <img className="user-project-img" src={i.img} />
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
  );
}
