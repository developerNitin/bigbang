import Sampleimg from "./no-image-230.png";
import "./styling/review.css";

function Review() {
  return (
    <div className="review">
    {/* <h1 className="h1">REVIEW</h1> */}
      <div className="border review-wrap">
        <div className="post-a-comment">
          <div className="post-a-comment-input-field">
            <img src={Sampleimg} />
            <textarea className="border" />
          </div>
          <div className="post-a-comment-button">
            <a className="a button-styling">POST A COMMENT</a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Review;
