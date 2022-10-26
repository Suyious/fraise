import React from 'react'
import Grid from '../../components/layout/grid'
import blogs from '../../assets/blogs'
import "./styles.css"

const Blogs = () => {

  return (
    <div className='blog main'>
      {/* Categories */}
      <Grid blogs={blogs}/>
    </div>
  )
}

export default Blogs
