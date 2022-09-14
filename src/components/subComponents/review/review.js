import Sampleimg1 from "./assets/sample-img-5.jpg";
import "./styling/review.css";

function Review() {
  const reivews = [
    { name: "Angela Su", comment: "nice work" },
    {
      name: "Angela Su",
      comment:
        "The colors of the project and these incredible details are perfectly selected! You are talented",
    },
    { name: "Angela Su", comment: "nice work" },
    {
      name: "Angela Su",
      comment:
        "The colors of the project and these incredible details are perfectly selected! You are talented",
    },
    { name: "Angela Su", comment: "cool!" },
  ];
  return (
    <div className="review">
      {/* <h1 className="h1">REVIEW</h1> */}
      <div className="border review-wrap">
        <div className="post-a-comment">
          <div className="post-a-comment-input-field">
            <img className="img-icon-border" src={Sampleimg1} />
            <textarea className="border" />
          </div>
          <div className="post-a-comment-button">
            <a className="a button-styling">POST A COMMENT</a>
          </div>
        </div>
        <hr className="hr" />
        <div className="public-review">
          {reivews.map((i, idx) => {
            return (
              <div className="public-review-wrap">
                <div className="public-review-wrap-first-child">
                  <div className="public-person-img">
                    <img className="img-icon-border" src={Sampleimg1} />
                  </div>
                  <div className="public-person-comment">
                    <h1 className="h1 public-person-name">{i.name}</h1>
                    <p className="p public-person-comment-display">
                      {i.comment}
                    </p>
                  </div>
                </div>
                <hr className="hr" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review;
