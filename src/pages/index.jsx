import React, {useRef} from "react";
import Loader from "../components/loader";
import Search from "../components/search";
import Slider from "../components/slider";
import "./styles.css";
import data from "../assets/blogs/index"
import {useNavigate} from "react-router";
import useGetBlogs from "../hooks/query/useGetBlogs";

const Home = () => {

  const { isLoading, isError } = useGetBlogs();
  const searchref = useRef(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const keyword = searchref.current.value; 
    if(keyword.length > 0) {
      navigate(`/blogs?keyword=${keyword}`)
    }
  }

  return (
    <div className="home main">
      <div className="home_loader">
        {isLoading && <Loader/>}
      </div>
      <div className="home_searchbox">
        <Search onSubmit={onSubmit} input_ref={searchref} placeholder="What's on your mind?"/>
      </div>
      <div className="home_background">
        {!isLoading && !isError && <Slider elements={data.data.blogs}/> }
      </div>
    </div>
  );
};

export default Home;
