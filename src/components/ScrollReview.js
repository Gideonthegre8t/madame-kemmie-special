import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000);
      };

      startAutoSlide();

      return () => clearInterval(intervalRef.current);
    }
  }, [isMobile, reviews.length]); // No need to include startAutoSlide here

  useEffect(() => {
    if (!isMobile) {
      clearInterval(intervalRef.current); // Ensure no auto-slide for desktop
    }
  }, [isMobile]);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseEnter = () => {
    if (isMobile) {
      stopAutoSlide();
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) {
      startAutoSlide();
    }
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      setActiveIndex((prevIndex) => Math.min(prevIndex + 1, reviews.length - 1));
    } else if (info.offset.x > 100) {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <section>
      <div
        className="review-carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`review-inner-carousel ${isMobile ? 'mobile' : 'desktop'}`}>
          <motion.div
            className="review-scroll"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={isMobile ? { x: `-${activeIndex * (100 / 3)}%` } : { x: '0%' }}
            transition={{ duration: 0.5 }}
          >
            {reviews.map((review) => (
              <div className="review" key={review.id}>
                <div className="review-top">
                  <div className="profile">
                    <p className="profile-name">
                      <img className="review-image" src={review.imgLoc} alt={review.name} />
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
          </motion.div>
        </div>
        {isMobile && (
          <div className="active-review">
            {reviews.map((_, index) => (
              <img
                key={index}
                className={index === activeIndex ? "active" : "non-active"}
                src={index === activeIndex ? active : nonActive}
                alt={index === activeIndex ? "activeSign" : "nonActiveSign"}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Scroll;
