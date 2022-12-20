import React from 'react'
import "./styles.css"
import Grid from '../../components/layout/grid'
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg"
import Tabs from '../../components/tabs'
import {useQuery} from 'react-query'
import axios from "../../utils/axios"
import {useSearchParams} from 'react-router-dom'
import ImageCard from '../../components/cards/imagecard'
import LoadingBlogCard from '../../components/emptystates/loading/blogcard'
import NoFoundBlogs from '../../components/emptystates/nofound/blogs'
// import data from "../../assets/blogs/index"

const Blogs = () => {

  const [ params ] = useSearchParams();
  const keyword = params.get("keyword") || "";
  const tags = params.get("tags");

  const { isLoading, isError, data } = useQuery([ 'blogs', `tag:${tags}` ], () => {
    return axios.get(`/blogs`, { params: {
      keyword,
      draft: false,
      tags
    }})
  })

  const tabs = [ "Science", "Tech", "Coding", "Politics", "Wellness", "Art", "Music", "Book", "Myths", "Religion" ]

  const gridLoad = [];
  for(let i = 0; i < 5; i++) {
    gridLoad.push({id: i});
  }

  const BlogsGrid = () => { 
    if(isLoading){
      return <Grid>{
        gridLoad.map(({id}) => (
          <LoadingBlogCard key={id}/>
        ))
      }</Grid>
    }
    if(isError) {
      return "Error";
    }
    const blogs = data.data.blogs;
    if(blogs.length === 0){
      return (
        <NoFoundBlogs/>
      )
    }
    return <Grid>{data.data.blogs.map((blog, i) => (
      <div className="grid_image"key={i}>
        <ImageCard blog={blog} />
      </div>))}</Grid>
  }

  return (
    <div className='blog main boxwidth'>
      <div className="blog_topbar">
        <div className="blog_topbar_label">
          <FilterIcon/>
          <span>Categories</span>
        </div>
        <Tabs tags={tags}>{tabs}</Tabs>
      </div>
      <BlogsGrid/>
    </div>
  )
}

export default Blogs
