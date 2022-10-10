import React from 'react'
import Grid from '../../components/layout/grid'
import images from '../../images/backgrounds'
import "./styles.css"

const Blogs = () => {

  return (
    <div className='blog main'>
      {/* Categories */}
      <Grid images={images}/>
    </div>
  )
}

export default Blogs
