import React, {useEffect, useState} from "react";
import "./styles.css";
import {ReactComponent as Previous} from "../../icons/previous.svg";
import {ReactComponent as Next} from "../../icons/next.svg";
import {ReactComponent as Circle} from "../../icons/circle.svg";
import Infocard from "../cards/infocard/";

const Slider = ({images}) => {

  const [background, setBackground] = useState(0);
  const [touchX, setTouchX] = useState(0);
  const [touched, setTouched] = useState(false);
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    let timer;
    const listener = window.addEventListener('resize', () => {
      clearTimeout(timer);
      setResizing(true);
      timer = setTimeout(() => {
        setResizing(false);
      }, 500);
    })
    return () => {
      window.removeEventListener('resize', listener);
    }
  })

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
    let timeout;
    if(!touched){
      timeout = setTimeout(() => {
        // console.log("Timed out");
        setBackground(Math.round(background));
      }, 200)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [background, touched])

  const scrollhandler = (e) => {
    let nbackground = background + 0.00076 * e.deltaX;
    if(nbackground > 0 && nbackground < images.length - 1){
      setBackground(nbackground);
    }
  }

  const touchhandler = (e) => {
    console.log(e);
    let touchdeltaX = e.touches[0].pageX - touchX;
    setTouchX(e.touches[0].pageX)
    let nbackground = background - 0.005 * touchdeltaX;
    if(nbackground >= 0 && nbackground <= images.length - 1){
      setBackground(nbackground);    
    }
  }

  const touchStartHandler = (e) => {
    setTouchX(e.touches[0].pageX);
    setTouched(true);
  }

  const touchEndHandler = () => {
    setTouched(false);
  }

  return (
    <div className="slider">
      <div className="slider_body">
        <div
          onTouchStart={touchStartHandler}
          onTouchEnd={touchEndHandler}
          onTouchMove={touchhandler}
          onWheel={scrollhandler}
          className="slider_image_body">
          <div
            className={`slider_slide_array${resizing ? "" : " transition"}`}
            style={{
              "transform": `translateX(calc(var(--vw, 1vw) * -1 * 100 * ${background}))`,
            }}
          >
            {images.map((image) => (
              <div key={image?.background} className="slider_slide_container">
                <div className="slider_slide_info_card">
                  <Infocard />
                </div>
                <div className="slider_image_container">
                  <img 
                    className={"slider_image"}
                    src={image?.background}
                    alt="background"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider_control">
          <div className={`slider_button left ${background!==0 ? "opaque": ""}`} onClick={previousSlide}>
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
          <div className={`slider_button right ${background!==images.length - 1 ? "opaque": ""}`} onClick={nextSlide}>
            <Next />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
