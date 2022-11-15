import React, {useEffect, useState} from "react";
import "./styles.css";
import {ReactComponent as Previous} from "../../assets/icons/previous.svg";
import {ReactComponent as Next}     from "../../assets/icons/next.svg";
import {ReactComponent as Circle}   from "../../assets/icons/circle.svg";
import Infocard from "../cards/infocard/";

const Slider = ({elements}) => {

  const [background, setBackground] = useState(0);
  const [touchX, setTouchX] = useState(0);
  const [touched, setTouched] = useState(false);
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    let timer;
    const resizeHandler = () => {
      clearTimeout(timer);
      setResizing(true);
      timer = setTimeout(() => {
        setResizing(false);
      }, 500);
    }
    window.addEventListener('resize', resizeHandler)
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  const previousSlide = () => {
    if (background > 0) {
      setBackground(background - 1);
    }
  };

  const nextSlide = () => {
    if (background < elements.length - 1) {
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
    if(nbackground > 0 && nbackground < elements.length - 1){
      setBackground(nbackground);
    }
  }

  const touchhandler = (e) => {
    // console.log(e);
    let touchdeltaX = e.touches[0].pageX - touchX;
    setTouchX(e.touches[0].pageX)
    let nbackground = background - 0.005 * touchdeltaX;
    if(nbackground >= 0 && nbackground <= elements.length - 1){
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
          <div className={`slider_slide_array${resizing ? "" : " transition"}`} style={{ "transform": `translateX(calc(var(--vw, 1vw) * -1 * 100 * ${background}))`, }} >
            {elements.length > 0 ? elements.map((element, i) => (
              <div key={i} className="slider_slide_container">
                <div className="slider_slide_info_card">
                  <Infocard blog={element}/>
                </div>
                <div className="slider_image_container">
                  <img className={"slider_image"} src={element?.image} alt="background" />
                </div>
              </div>)) : 
              <div className="slider_slide_container">
                <div className="slider_slide_info_card">
                  <div className="slider_no_blogs">No Blogs to show</div>
                </div>
              </div>}
          </div>
        </div>
        <div className="slider_control">
          <div className={`slider_button left ${background!==0 ? "opaque": ""}`} onClick={previousSlide}>
            <Previous />
          </div>
          <div className="slider_position">
            {elements.map((element, i) => (
              <div key={i} onClick={() => setBackground(i)} className={`slider_position_circle ${element === elements[background] ? "active" : "inactive" }`} >
                <Circle />
              </div>
            ))}
          </div>
          <div className={`slider_button right ${background!==elements.length - 1 ? "opaque": ""}`} onClick={nextSlide}>
            <Next />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
