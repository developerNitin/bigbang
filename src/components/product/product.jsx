import "./style/product.css";

import Suggestion from "../../UI/suggestion/suggestion";
import Review from "../../UI/review/review";

import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  //array
  const sampleimg = props.image.map((i) => i);
  const nullarray = props.image.map(() => null);

  //use state
  const [images, setImages] = useState([sampleimg[0], ...nullarray]);
  const [borderStyle, setBorderStyle] = useState(0);

  //button on click
  function OnClickImageHandler(props) {
    setImages([sampleimg[props], ...nullarray]);
    setBorderStyle(props);
  }

  return (
    <div className="product-page">
      <div className="product-page-wrap">
        <div className="page product-page-images">
          <div className="product-page-images-wrap">
            <div>
              {images.map((i, idx) => {
                return <img key={idx} src={i} alt="" />;
              })}
            </div>
          </div>
          <div className="product-page-images-change-bar">
            {props.image.map((i, idx) => {
              return (
                <div key={idx}>
                  <button
                    style={
                      borderStyle === idx ? { borderColor: "#191919" } : null
                    }
                    onClick={() => OnClickImageHandler(idx)}
                  >
                    <img src={i} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" product-info">
          <div className="page product-info-wrap">
            <div className="product-info-wrap-first-child">
              <div className="product-page-cart-links">
                <button className="button-styling product-page-cart-links-wrap">
                  HIRE US
                </button>
              </div>
              <h1 className="h1 product-info-heading">
                {props.heading} - {props.description}
              </h1>{" "}
              <div className="product-info-user-name">
                <Link className="a" to={props.parenturl}>
                  {props.name}
                </Link>
              </div>
              <div className="product-review">
                <Link to="" className="a">
                  <span className="product-info-review-stars">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <span key={idx}>
                        <AiFillStar />
                      </span>
                    ))}
                  </span>
                  <span>
                    4.9 {"("}30{")"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="page product-owner-detail">
          <Review />
          <div className="product-owner-detail-wrap">
            <div className="border product-owner-detail-wrap-first-child">
              <span className="product-owner-detail-owner-label">owner</span>
              <div className="product-ower-detail-img-nd-heading">
                <Link className="a" to={props.parenturl}>
                  <img className="img-icon-border" src={props.profileimage} />
                </Link>
                <div>
                  <Link className="a" to={props.parenturl}>
                    <h1 className="h1">{props.name}</h1>
                  </Link>
                  <Link to="" className="a">{props.location}</Link>
                </div>
              </div>
              <div className="product-owner-detail-button-wrap">
                <Link to="" className="button-styling product-owner-detail-button-hire-me">
                  HIRE US
                </Link>
              </div>
            </div>
            <div className="border product-owner-detail-wrap-second-child">
              <h1 className="h1">{props.heading}</h1>
              <p className="p">Published: {props.date}</p>
            </div>
          </div>
        </div>
        <Suggestion parentindex={props.parentindex} index={props.index} />
      </div>
    </div>
  );
};

export default Product;
