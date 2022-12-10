import React, {useState} from 'react'
import "./styles.css"
import Grid from '../../components/layout/grid'
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg"
import Tabs from '../../components/tabs'
import {useQuery} from 'react-query'
import axios from "../../utils/axios"
import {useSearchParams} from 'react-router-dom'
import ModalFloatingStack from '../../components/modals/stack'
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

  return (
    <div className='blog main boxwidth'>
      <div className="blog_topbar">
        <div className="blog_topbar_label">
          <FilterIcon/>
          <span>Categories</span>
        </div>
        <Tabs tags={tags}>{tabs}</Tabs>
      </div>
      {!isLoading && !isError && <Grid blogs={data.data.blogs}/> }
    </div>
  )
}

export default Blogs
