import "./styling/product.css";

import Sampleimg from "./styling/sample-product-img.png";
import SampleProfileImg from "./styling/sample-profile-picture.png";
import Review from "../../subComponents/review/review";
import { AiFillStar } from "react-icons/ai";

const Product = () => {
  return (
    <div className="page product-page">
      <div className="product-page-wrap">
        <div className="product-img ">
          <div className="product-img-wrap">
            <img src={Sampleimg} />
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-wrap">
            <div className="product-info-wrap-first-child">
              <div className="product-page-cart-links">
                <a className="a button-styling product-page-cart-links-wrap">
                  ADD TO CART
                </a>
              </div>
              <h1 className="h1 product-info-heading">She Unicone</h1>
              <div className="product-info-user-name">
                <a className="a ">- Angela Su</a>
              </div>
              <div className="product-review">
                <a className="a">
                  <span className="product-info-review-stars">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </span>
                  <span>
                    4.9 {"("}30{")"}
                  </span>
                </a>
              </div>
            </div>
            <div className="product-page-description">
              <div className=" product-page-description-wrap">
                <p className="p product-page-description-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus imperdiet eros id nisi vulputate porttitor. Curabitur
                  vitae enim quis turpis condimentum dictum. Nam ullamcorper id
                  lacus id ornare. Duis lacus nunc, scelerisque id suscipit
                  quis, finibus vel erat.
                  <br /> <br />
                  Vivamus tempor vel augue imperdiet porta. Morbi in nunc eget
                  augue iaculis egestas. Mauris venenatis nisl sit amet metus
                  cursus ullamcorper. Quisque sed maximus lacus, eu porttitor
                  augue.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-owner-detail">
          <Review />
          <div className=" product-owner-detail-wrap">
            <div className="border product-owner-detail-wrap-first-child">
              <span className="product-owner-detail-owner-label">owner</span>
              <div className="product-ower-detail-img-nd-heading">
                <img src={SampleProfileImg} />
                <div>
                  <h1 className="h1">Angle Su</h1>
                  <a className="a">-California, USA.</a>
                </div>
              </div>
              <div className="product-owner-detail-button-wrap">
                <a className="a button-styling product-owner-detail-button-hire-me">
                  HIRE ME
                </a>
                <a className="a button-styling-2 product-owner-detail-button-follow">
                  FOLLOW
                </a>
              </div>
            </div>
            <div className="border product-owner-detail-wrap-second-child">
              <h1 className="h1">She Unicone</h1>
              <p className="p">Published: 9 sept 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
