import React from 'react'
import Grid from '../../components/layout/grid'
import "./styles.css"

const Blog = () => {

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='blog main'>
      {/* Categories */}
      {/* grid */}
      <Grid images={images}/>
    </div>
  )
}

export default Blog
