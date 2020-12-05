import React, { useEffect } from "react";
import { useState } from "react";
import BigSearch from "./BigSearch";
import { motion, AnimatePresence } from "framer-motion";
import Credits from "./Credits";
import axios from "./axios";
import Nav from "./Nav";

function Home() {
  const [backgroundArray, setBackgroundArray] = useState([]);
  const [background, setBackground] = useState(0);

  useEffect(() => {
    axios.get("/background/sync").then((response) => {
      // console.log("resonse: ", response.data);
      setBackgroundArray(response.data);
    });
  }, []);

  const previousSlide = () => {
    if (background > 0) {
      setBackground(background - 1);
    }
  };

  const nextSlide = () => {
    if (background < backgroundArray.length - 1) {
      setBackground(background + 1);
    }
  };

  return (
    <div className="Home">
      <Nav />
      <BigSearch />
      <div className="background">
        <div className="background__cards">
          <AnimatePresence>
            <div className="background__card">
              <motion.img
                key={backgroundArray[background]?.background}
                className={"background__img"}
                src={backgroundArray[background]?.background}

                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                exitBeforeEnter
              />
              <div className="background__card__blog">
                <Credits
                  creditlink={backgroundArray[background]?.creditlink}
                  photolink={backgroundArray[background]?.photolink}
                  credit={backgroundArray[background]?.credit}
                />
              </div>
            </div>
          </AnimatePresence>
        </div>
        <div className="background__buttons">
          <div
            onClick={previousSlide}
            className="background__button left_button"
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2925 0.292486C6.10567 0.105233 5.85202 0 5.5875 0C5.32298 0 5.06933 0.105233 4.8825 0.292486L0.2925 4.88249C-0.0975 5.27249 -0.0975 5.90249 0.2925 6.29249L4.8825 10.8825C5.2725 11.2725 5.9025 11.2725 6.2925 10.8825C6.6825 10.4925 6.6825 9.86249 6.2925 9.47249L2.4125 5.58249L6.2925 1.70249C6.6825 1.31249 6.6725 0.672486 6.2925 0.292486Z"
                fill="#DCDCDC"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          <div className="background__button button_circles">
            {backgroundArray.map((backgr) => {
              if (
                backgr.background === backgroundArray[background]?.background
              ) {
                return (
                  <div className="button_circle">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6.5" cy="6.5" r="6.5" fill="#DCDCDC" />
                    </svg>
                  </div>
                );
              } else {
                return (
                  <div className="button_circle">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="6.5"
                        fill="#DCDCDC"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </div>
                );
              }
            })}
          </div>
          <div onClick={nextSlide} className="background__button right_button">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.2925 0.293762C-0.0975 0.683762 -0.0975 1.31376 0.2925 1.70376L4.1725 5.58376L0.2925 9.46376C-0.0975 9.85376 -0.0975 10.4838 0.2925 10.8738C0.6825 11.2638 1.3125 11.2638 1.7025 10.8738L6.2925 6.28376C6.6825 5.89376 6.6825 5.26376 6.2925 4.87376L1.7025 0.283762C1.3225 -0.0962378 0.6825 -0.0962378 0.2925 0.293762Z"
                fill="#DCDCDC"
                fillOpacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
