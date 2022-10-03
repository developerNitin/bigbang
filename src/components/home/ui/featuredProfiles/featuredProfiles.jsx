import "./style/featuredProfiles.css";

import Sampleimg1 from "../assets/sample-img-1.jpg";
import Sampleimg2 from "../assets/sample-img-2.jpg";
import Sampleimg3 from "../assets/sample-img-3.jpg";
import Sampleimg4 from "../assets/sample-img-4.jpg";
import Sampleimg5 from "../assets/sample-img-5.jpg";
import Sampleimg6 from "../assets/sample-img-6.jpg";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Userdata from "../../../../userdata";

export default function Featured() {
  const FeaturedProfilesData = [
    {
      img1: Sampleimg1,
      img2: Sampleimg5,
      title: "Illustration",
      name: "Angela Su",
    },
    {
      img1: Sampleimg2,
      img2: Sampleimg5,
      title: "Illustration",
      name: "Angela Su",
    },
    {
      img1: Sampleimg3,
      img2: Sampleimg5,
      title: "Illustration",
      name: "Angela Su",
    },
    {
      img1: Sampleimg4,
      img2: Sampleimg5,
      title: "Illustration",
      name: "Angela Su",
    },
    {
      img1: Sampleimg5,
      img2: Sampleimg5,
      title: "Illustration",
      name: "Angela Su",
    },
    {
      img1: Sampleimg6,
      img2: Sampleimg5,
      title: "Illustration",
      name: "Angela Su",
    },
  ];
  return (
    <div className="page featured-profiles">
      <div className="featured-profiles-heading">
        <h1 className="h1">FEATURED PROFILES</h1>
        <a className="button-styling">
          <span>EXPLORE MORE</span>
        </a>
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
              <a className="a" href={i.url}>
                <div className="suggested-profiles-img-wrap image-ani">
                  <img src={i.image[0]} />
                </div>
              </a>
              <div className="suggested-profiles-user-profile">
                <div className="suggested-profiles-user-profile-image">
                  <a href={i.url}><img src={i.profileimage} /></a>
                </div>
                <div>
                  <h3 className="h1">{i.title}</h3>
                  <p className="p">
                    <a className="a" href={i.url}>by {i.name}</a>
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
