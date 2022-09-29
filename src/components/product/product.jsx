import "./style/product.css";
import Suggestion from "../../UI/suggestion/suggestion";

import Sampleimg1 from "./assets/sample-img-1.jpg";
import Sampleimg2 from "./assets/sample-img-2.jpg";
import Sampleimg3 from "./assets/sample-img-3.jpg";
import Sampleimg4 from "./assets/sample-img-4.jpg";
import Sampleimg5 from "./assets/sample-img-5.jpg";
import Sampleimg6 from "./assets/sample-img-6.jpg";

import Review from "../../UI/review/review";

import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const Product = (props) => {
  const style1 = { border: "3px solid #191919", borderRadius: "3px" };
  const style2 = { border: "3px solid transparent", borderRadius: "3px" };

  const [images, setImages] = useState([
    Sampleimg1,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [style, setStyle] = useState([
    style1,
    style2,
    style2,
    style2,
    style2,
    style2,
  ]);

  function onClickImageHandler(props) {
    switch (props) {
      case 0:
        setImages([Sampleimg1, null, null, null, null, null]);
        setStyle([style1, style2, style2, style2, style2, style2]);
        break;
      case 1:
        setImages([null, Sampleimg2, null, null, null, null]);
        setStyle([style2, style1, style2, style2, style2, style2]);
        break;
      case 2:
        setImages([null, null, Sampleimg3, null, null, null]);
        setStyle([style2, style2, style1, style2, style2, style2]);
        break;
      case 3:
        setImages([null, null, null, Sampleimg4, null, null]);
        setStyle([style2, style2, style2, style1, style2, style2]);
        break;
      case 4:
        setImages([null, null, null, null, Sampleimg5, null]);
        setStyle([style2, style2, style2, style2, style1, style2]);
        break;
      case 5:
        setImages([null, null, null, null, null, Sampleimg6]);
        setStyle([style2, style2, style2, style2, style2, style1]);
        break;
      default:
        break;
    }
  }

  return (
    <div className="page product-page">
      <div className="product-page-wrap">
        <div className="product-page-images">
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
                    style={style[idx]}
                    onClick={() => onClickImageHandler(idx)}
                  >
                    <img src={i} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-wrap">
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
                <a className="a" href={props.parenturl}>
                  {props.name}
                </a>
              </div>
              <div className="product-review">
                <a className="a">
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
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="product-owner-detail">
          <Review />
          <div className="product-owner-detail-wrap">
            <div className="border product-owner-detail-wrap-first-child">
              <span className="product-owner-detail-owner-label">owner</span>
              <div className="product-ower-detail-img-nd-heading">
                <a className="a" href={props.parenturl}>
                  <img className="img-icon-border" src={Sampleimg5} />
                </a>
                <div>
                  <a className="a" href={props.parenturl}>
                    <h1 className="h1">{props.name}</h1>
                  </a>
                  <a className="a">{props.location}</a>
                </div>
              </div>
              <div className="product-owner-detail-button-wrap">
                <a className="button-styling product-owner-detail-button-hire-me">
                  HIRE US
                </a>
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
