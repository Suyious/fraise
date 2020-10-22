import React from "react";
import { useState } from "react";
import "./App.css";
import BigSearch from "./BigSearch";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [backgroundArray, setBackgroundArray] = useState([
    {
      background:
        "https://images.unsplash.com/photo-1602008672365-f4c4244c8034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
      credits: (
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@jrfarren316?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Jr. Farren
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      ),
    },
    {
      background:
        "https://images.unsplash.com/photo-1602066642177-83bdd34ee8f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      credits: (
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@miguelmendes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Miguel Mendes
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      ),
    },
    {
      background:
        "https://images.unsplash.com/photo-1597073591683-0c4b9355d9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      credits: (
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@__hitanshu?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Hitanshu Patel
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      ),
    },
  ]);

  const [background, setBackground] = useState(0);

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

  // useEffect(() => {
  //   window.addEventListener(
  //     "wheel",
  //     (e) => {
  //       if (
  //         e.deltaY >= 125 &&
  //         e.deltaY < 1000 &&
  //         background < backgroundArray.length - 1
  //       ) {
  //         console.log(e.deltaY);
  //         nextSlide();

  //       } else if (e.deltaY <= -125 && e.deltaY > -1000 && background > 0) {
  //         console.log(e.deltaY);
  //         previousSlide();

  //       }
  //     },
  //     { passive: false }
  //   );
  // return () => {
  //   document.addEventListener("wheel", (e) => {
  //     if (e.deltaY >= 125) {
  //       nextSlide();
  //     } else if (e.deltaY <= -125) {
  //       previousSlide();
  //     }
  //   });
  // };
  // });

  return (
    <div className="App">
      <Nav />
      <BigSearch />
      {/* <h1 style={{ zIndex: 2, color: "white" }}>{background}</h1> */}
      <div className="background">
        <div className="background__cards">
          <AnimatePresence>
            <div className="background__card">
              <motion.img
                key={backgroundArray[background].background}
                className={"background__img"}
                src={backgroundArray[background].background}
                alt="nature"
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                exitBeforeEnter
              />
              <div className="background__card__blog">
                <p>{backgroundArray[background].credits}</p>
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
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <div className="background__button button_circles">
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
                fill-opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
