import "./style/search.css";
import coverImg from "./coverImg.jpeg";
import image from "./sample-img-2.jpg";

import data from "../../userdata";

import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
// import { useState } from "react";

export default function SearchPage() {
  // const [searchHeading, setSearchHeading] = useState("");
  let n = 0;

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
            // onChange={(e) => setSearchHeading(e.target.value)}
            // value={searchHeading}
            placeholder="Search works..."
          />
        </form>
      </div>

      {/* <h1 className="h1">
        <span
          style={
            searchHeading != "" ? { display: "none" } : { display: "block" }
          }
        >
          Search!
        </span>
        {searchHeading}
      </h1> */}
      <div className="page user-works">
        <div className="user-works-heading">
          <h1 className="h1">
            PROJECTS<span>169</span>
          </h1>
        </div>
        <hr className="hr" />
        <div className="user-project-wrap">
          {data.map((i) => {
            return i.products.map((i, idx) => {
              if (n == 16) {
                return;
              } else {
                n++;
              }
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
            });
          })}
        </div>
      </div>
    </div>
  );
}
