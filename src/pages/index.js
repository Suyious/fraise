import React, { useEffect, useState } from "react";
import axios from "../axios";
import Search from "../components/search";
import Slider from "../components/slider";
import "./styles.css";

const Home = () => {

  const [images, setImages] = useState([]);
  
  useEffect(() => {
    axios.get("/background/sync").then((response) => {
      setImages(response.data);
    });
  }, []);

  return (
    <div className="home main boxwidth">
      <div className="home_searchbox">
        <Search placeholder="What's on your mind?"/>
      </div>
      <div className="home_background">
        <Slider images={images}/>
      </div>
    </div>
  );
};

export default Home;
