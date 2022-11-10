import React from "react";
import Loader from "../components/loader";
import Search from "../components/search";
import Slider from "../components/slider";
import "./styles.css";
import {useQuery} from "react-query";
import axios from '../utils/axios'

const Home = () => {

  const { isLoading, data, isError } = useQuery('blogs',() => {
    return axios.get('/blogs');
  });

  return (
    <div className="home main">
      <div className="home_loader">
        {isLoading && <Loader/>}
      </div>
      <div className="home_searchbox">
        <Search placeholder="What's on your mind?"/>
      </div>
      <div className="home_background">
        {!isLoading && !isError && <Slider images={data.data.blogs}/> }
      </div>
    </div>
  );
};

export default Home;
