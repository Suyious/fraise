import React from "react";

function Credits({ creditlink, photolink, credit }) {
  return (
    <div className="credit">
      <div className="credit_left">
        <p className="credit_top">
          <span>
            Photo from{" "}
            <a href={photolink}>Unsplash</a>{" "}
            {" "}by{" "} 
          </span>
        </p>
        <p className="credit_bottom">
          <a href={creditlink}>{credit}</a>
        </p>
      </div>
      <div className="credit_unsplashlogo">
        <svg width="32" height="32" class="_1Jlgk" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
      </div>
    </div>
  );
}

export default Credits;
