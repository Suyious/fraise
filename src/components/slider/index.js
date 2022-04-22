import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as Previous } from "../../icons/previous.svg";
import { ReactComponent as Next } from "../../icons/next.svg";
import { ReactComponent as Circle } from "../../icons/circle.svg";

const Slider = ({images}) => {
  
  const [background, setBackground] = useState(0);

  const previousSlide = () => {
    if (background > 0) {
      setBackground(background - 1);
    }
  };

  const nextSlide = () => {
    if (background < images.length - 1) {
      setBackground(background + 1);
    }
  };

  return (
    <div className="slider">
      <div className="slider_body">
        <div className="slider_image_body">
          {/* <img
            key={images[background]?.key}
            className={"slider_image"}
            src={images[background]?.src}
            alt="{images[background]?.alt}"
          /> */}
          <img
            key={images[background]?.background}
            className={"slider_image"}
            src={images[background]?.background}
            alt="background"
          />
        </div>
        <div className="slider_control">
          <div className="slider_button left" onClick={previousSlide}>
            <Previous />
          </div>
          <div className="slider_position">
            {images.map((image, i) => (
              <div
                key={i}
                onClick={()=>setBackground(i)}
                className={`slider_position_circle ${
                  image.background === images[background]?.background
                    ? "active"
                    : "inactive"
                }`}
              >
                <Circle />
              </div>
            ))}
          </div>
          <div className="slider_button right" onClick={nextSlide}>
            <Next />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
