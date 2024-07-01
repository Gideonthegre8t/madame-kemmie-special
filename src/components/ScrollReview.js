import React from "react";
import mike from "../assets/images/photo/Mike.png";
import starRate from "../assets/images/star-rating.png";
import active from "../assets/images/active.png";
import nonActive from "../assets/images/non-active.png";

function Scroll() {
  const reviews = [
    {
      id: 1,
      reviewText:
        "Best catering experience we've ever had! The attention to detail and the quality of the food were outstanding. We will definitely be using their services again.",
      imgLoc: mike,
      name: "Mike.J",
    },
    {
      id: 2,
      reviewText:
        "The food was absolutely amazing, and the presentation was stunning! Our guests couldn't stop raving about the delicious dishes. Thank you for making our event unforgettable!",
      imgLoc: mike,
      name: "Bryant.K",
    },
    {
      id: 3,
      reviewText:
        "Exceptional service from start to finish. The team was professional, punctual, and catered to all our dietary needs with ease. Highly recommend!",
      imgLoc: mike,
      name: "James.L",
    },
  ];
  return (
    <section>
      <div className="review-card">
        <div className="review-scroll">
          {reviews.map((review) => (
            <div className="review" key={review.id}>
              <div className="review-top">
                <div className="profile">
                  {" "}
                  <p className="profile-name">
                    <img
                      className="review-image"
                      src={review.imgLoc}
                      alt={review.name}
                    />

                    {review.name}
                  </p>
                </div>

                <div>
                  <img className="star-rate" src={starRate} alt="starRate" />
                </div>
              </div>
              <p className="review-text">{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="active-review">
        <img className="active" src={active} alt="activeSign" />

        <img className="non-active" src={nonActive} alt="nonActiveSign" />

        <img className="non-active" src={nonActive} alt="nonActiveSign" />

        <img className="non-active" src={nonActive} alt="nonActiveSign" />
      </div>
    </section>
  );
}

export default Scroll;
