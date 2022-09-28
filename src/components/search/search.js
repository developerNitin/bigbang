import "./style/search.css";
import coverImg from "./coverImg.jpeg";
import image from "./sample-img-2.jpg";

import { GoSearch } from "react-icons/go";
import { useState } from "react";

export default function SearchPage() {
  const [searchHeading, setSearchHeading] = useState("");

  const project = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  return (
    <div className="search-page">
      <div className="cover-img">
        <div className="cover-img-container">
          {/* <img src={coverImg} /> */}
        </div>
         <hr className="hr" />
      </div>
      <div className="search-form">
        <form>
          <figure>
            <GoSearch />
          </figure>
          <input
            className="border"
            onChange={(e) => setSearchHeading(e.target.value)}
            value={searchHeading}
            placeholder="Search works..."
          />
        </form>
      </div>

      <h1 className="h1">
        <span
          style={
            searchHeading != "" ? { display: "none" } : { display: "block" }
          }
        >
          Search!
        </span>
        {searchHeading}
      </h1>
      <div className="page user-works">
        <div className="user-works-heading">
          <h1 className="h1">
            PROJECTS<span>169</span>
          </h1>
        </div>
        <hr className="hr" />
        <div className="user-project-wrap">
          {project.map((i) => {
            return (
              <div key={i} className="user-project border">
                <a>
                  <div className="user-project-image-wrap">
                    <img className="image-ani user-project-img" src={image} />
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
  );
}
