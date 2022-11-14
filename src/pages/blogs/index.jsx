import React from 'react'
import "./styles.css"
import Grid from '../../components/layout/grid'
// import blogs from '../../assets/blogs'
// import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg"
// import Tabs from '../../components/tabs'
import {useQuery} from 'react-query'
import axios from "../../utils/axios"
import data from "../../assets/blogs/index"

const Blogs = () => {

  const { isLoading, isError } = useQuery('blogs', () => {
    return axios.get('/blogs')
  })

  // const tabs = [ "Science", "Tech", "Coding", "Politics", "Wellness", "Art", "Music", "Book", "Myths", "Religion" ]

  return (
    <div className='blog main boxwidth'>
      {/* <div className="blog_topbar"> */}
      {/*   <div className="blog_topbar_label"> */}
      {/*     <FilterIcon/> */}
      {/*     <span>Categories</span> */}
      {/*   </div> */}
      {/*   <Tabs>{tabs}</Tabs> */}
      {/* </div> */}
      {!isLoading && !isError && <Grid blogs={data}/> }
    </div>
  )
}

export default Blogs
