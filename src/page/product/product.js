import "./styling/product.css";

import Sampleimg from "./styling/sample-product-img.png";

const Product = () => {
  return (
    <div className="page product-page">
      <div className="product-page-wrap">
        <div className="product-img-wrap">
          <img src={Sampleimg} />
        </div>
        <div className="product-info">
          <div className="product-info-wrap">
            <h1 className="h1 product-info-heading">She Unicone</h1>
            <a className="a product-info-user-name">- Angela Su</a>
            <div className="product-review">
              <a className="a">
                4.9 {"("}30{")"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
