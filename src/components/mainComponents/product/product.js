import "./styling/product.css";

import Sampleimg1 from "./assets/sample-img-1.jpg";
import Sampleimg2 from "./assets/sample-img-2.jpg";
import Sampleimg3 from "./assets/sample-img-3.jpg";
import Sampleimg4 from "./assets/sample-img-4.jpg";
import Sampleimg5 from "./assets/sample-img-5.jpg";
import Sampleimg6 from "./assets/sample-img-6.jpg";

import Review from "../../subComponents/review/review";

import { AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Product = () => {
  return (
    <div className="page product-page">
      <div className="product-page-wrap">
        <div className="product-images">
          <div className="product-images-wrap">
            <div className="product-images-wrap-first-child">
              <div className="product-images-wrap-first-child-first-child">
                <img src={Sampleimg2} />
              </div>
              <div className="product-images-wrap-first-child-second-child">
                <img
                  className="product-images-wrap-first-child-second-child-first-child"
                  src={Sampleimg1}
                />
                <img src={Sampleimg3} />
              </div>
            </div>
            <div className="product-images-wrap-second-child">
              <div className="product-images-wrap-second-child-first-child">
                <img
                  className="product-images-wrap-second-child-first-child-first-child"
                  src={Sampleimg4}
                />
                <img src={Sampleimg5} />
              </div>
              <div className="product-images-wrap-second-child-second-child">
                <img src={Sampleimg6} />
              </div>
            </div>
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

            {/* <div className="product-page-description">
              <div className="product-page-description-wrap">
                <p className="p product-page-description-paragraph">
                  <span>About project: </span>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vivamus imperdiet eros id nisi
                  vulputate porttitor. Curabitur vitae enim quis turpis
                  condimentum dictum. Nam ullamcorper id lacus id ornare. Duis
                  lacus nunc, scelerisque id suscipit quis, finibus vel erat.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="suggested-project">
          <div className="suggested-project-scroll-icons-1">
            <button className="a button-styling-2 suggested-project-scroll-icons-1-button">
              <MdKeyboardArrowLeft />
            </button>
          </div>

          <div className="suggested-project-wrap">
            <div className="suggested-project-img-wrap">
              <a className="a">
                <img src={Sampleimg1} />
              </a>
            </div>
            <div className="suggested-project-img-wrap">
              <a className="a">
                <img src={Sampleimg2} />
              </a>
            </div>
            <div className="suggested-project-img-wrap">
              <a className="a">
                <img src={Sampleimg3} />
              </a>
            </div>
            <div className="suggested-project-img-wrap">
              <a className="a">
                <img src={Sampleimg4} />
              </a>
            </div>
            <div className="suggested-project-img-wrap">
              <a children="a">
                <img src={Sampleimg5} />
              </a>
            </div>
            <div className="suggested-project-img-wrap">
              <a>
                <img src={Sampleimg6} />
              </a>
            </div>
          </div>

          <div className="suggested-project-scroll-icons-2">
            <button className="a button-styling-2 suggested-project-scroll-icons-2-button">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div className="product-owner-detail">
          <div className=" product-owner-detail-wrap">
            <div className="border product-owner-detail-wrap-first-child">
              <span className="product-owner-detail-owner-label">owner</span>
              <div className="product-ower-detail-img-nd-heading">
                <img className="img-icon-border" src={Sampleimg5} />
                <div>
                  <h1 className="h1">Angela Su</h1>
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
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Product;
