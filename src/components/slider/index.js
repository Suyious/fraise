import React, {useEffect, useState} from "react";
import "./styles.css";
import {ReactComponent as Previous} from "../../icons/previous.svg";
import {ReactComponent as Next} from "../../icons/next.svg";
import {ReactComponent as Circle} from "../../icons/circle.svg";

const Slider = ({images}) => {

  const [background, setBackground] = useState(0);
  const [touchX, setTouchX] = useState(0);

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

  useEffect(() => {
    let timeout = setTimeout(() => {
      // console.log("Timed out");
      setBackground(Math.round(background));
    }, 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [background])

  const scrollhandler = (e) => {
    let nbackground = background - 0.001 * e.deltaX;
    console.log(e.deltaX);
    if(nbackground > 0 && nbackground < images.length - 1)
      setBackground(nbackground);
  }

  const touchhandler = (e) => {
    let touchdeltaX = e.touches[0].pageX - touchX;
    setTouchX(e.touches[0].pageX)
    let nbackground = background - 0.005 * touchdeltaX;
    if(nbackground >= 0 && nbackground <= images.length - 1){
      setBackground(nbackground);    
    }
  }

  return (
    <div className="slider">
      <div className="slider_body">
        <div
          onTouchStart={(e) => setTouchX(e.touches[0].pageX)}
          onTouchMove={touchhandler}
          onWheel={scrollhandler}
          className="slider_image_body">
          <div
            className="slider_image_array"
            style={{
              "transform": `translateX(${-window.innerWidth * background}px)`,
            }}
          >
            {images.map((image) => (
              <img
                key={image?.background}
                className={"slider_image"}
                src={image?.background}
                alt="background"
              />
            ))}
          </div>
        </div>
        <div className="slider_control">
          <div className="slider_button left" onClick={previousSlide}>
            <Previous />
          </div>
          <div className="slider_position">
            {images.map((image, i) => (
              <div
                key={i}
                onClick={() => setBackground(i)}
                className={`slider_position_circle ${image.background === images[background]?.background
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
