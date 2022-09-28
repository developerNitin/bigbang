import "./style/product.css";

import Sampleimg1 from "./assets/sample-img-1.jpg";
import Sampleimg2 from "./assets/sample-img-2.jpg";
import Sampleimg3 from "./assets/sample-img-3.jpg";
import Sampleimg4 from "./assets/sample-img-4.jpg";
import Sampleimg5 from "./assets/sample-img-5.jpg";
import Sampleimg6 from "./assets/sample-img-6.jpg";

import Review from "../../UI/review/review";

import { AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const Product = () => {
  const [images, setImages] = useState([
    Sampleimg1,
    null,
    null,
    null,
    null,
    null,
  ]);

  const style1 = { border: "3px solid #191919", borderRadius: "3px" };
  const style2 = { border: "3px solid transparent", borderRadius: "3px" };

  const [style, setStyle] = useState([
    style1,
    style2,
    style2,
    style2,
    style2,
    style2,
  ]);

  const realStuff = [
    Sampleimg1,
    Sampleimg2,
    Sampleimg3,
    Sampleimg4,
    Sampleimg5,
    Sampleimg6,
  ];

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
        {/* <div className="product-page-header">
          <div>
            <div>
              <img src={Sampleimg3} />
            </div>
            <div>
              <h1 className="h1">Angela Su</h1>
              <p className="p">Illustrator | logo designer</p>
            </div>
          </div>
          <div>
            <button className="button-styling">FOLLOW</button>
          </div>
        </div> */}
        <div className="product-page-images">
          <div className="product-page-images-wrap">
            <div>
              {images.map((i, idx) => {
                return <img key={idx} src={i} alt="" />;
              })}
            </div>
          </div>
          <div className="product-page-images-change-bar">
            {realStuff.map((i, idx) => {
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
                She Unicone - The colors of the project and these incredible
                details
                <br /> are perfectly selected! You are talented project.
              </h1>

              <div className="product-info-user-name">
                <a className="a">- Angela Su -</a>
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
          </div>
        </div>

        <div className="product-owner-detail">
          <Review />
          <div className="product-owner-detail-wrap">
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
                <a className="button-styling product-owner-detail-button-hire-me">
                  HIRE US
                </a>
                {/* <a className="button-styling-2 product-owner-detail-button-follow">
                  FOLLOW
                </a> */}
              </div>
            </div>
            <div className="border product-owner-detail-wrap-second-child">
              <h1 className="h1">She Unicone</h1>
              <p className="p">Published: 9 sept 2022</p>
            </div>
          </div>
        </div>
        <div className="suggested-project-parent">
        {/* <hr className="hr"/> */}
          <div className="suggested-project">
            <div className="suggested-project-scroll-icons-1">
              <button className="button-styling suggested-project-scroll-icons-1-button">
                <MdKeyboardArrowLeft />
              </button>
            </div>

            <div className="suggested-project-wrap">
              <div className="suggested-project-img-wrap">
                <a className="a">
                  <img className="image-ani" src={Sampleimg1} />
                </a>
              </div>
              <div className="suggested-project-img-wrap">
                <a className="a">
                  <img className="image-ani" src={Sampleimg2} />
                </a>
              </div>
              <div className="suggested-project-img-wrap">
                <a className="a">
                  <img className="image-ani" src={Sampleimg3} />
                </a>
              </div>
              <div className="suggested-project-img-wrap">
                <a className="a">
                  <img className="image-ani" src={Sampleimg4} />
                </a>
              </div>
              <div className="suggested-project-img-wrap">
                <a children="a">
                  <img className="image-ani" src={Sampleimg5} />
                </a>
              </div>
              <div className="suggested-project-img-wrap">
                <a className="a">
                  <img className="image-ani" src={Sampleimg6} />
                </a>
              </div>
            </div>

            <div className="suggested-project-scroll-icons-2">
              <button className="button-styling suggested-project-scroll-icons-2-button">
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

{
  /* <div className="product-images">
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
        </div> */
}

{
  /* <div className="product-page-description">
              <div className="product-page-description-wrap">
                <p className="p product-page-description-paragraph">
                  <span>About project: </span>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vivamus imperdiet eros id nisi
                  vulputate porttitor. Curabitur vitae enim quis turpis
                  condimentum dictum. Nam ullamcorper id lacus id ornare. Duis
                  lacus nunc, scelerisque id suscipit quis, finibus vel erat.
                </p>
              </div>
            </div> */
}
