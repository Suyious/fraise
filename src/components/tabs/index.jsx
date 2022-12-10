import React from 'react'
import {Link} from 'react-router-dom'
import "./styles.css"

const Tabs = ({ tags, children }) => {
  
  return (
    <div className="tabs">
      { children.map((child, index) => (
          <Link to={{ pathname: '/blogs', search: `?tags=${child}` }} className={ `tabs_tab_box ${tags === child && "select"}` } key={index}>{child}</Link>
      )) }
    </div>
  )
}

export default Tabs
