import React from 'react'
import "./styles.css"

const Tabs = ({ children }) => {
  return (
    <div className="tabs">
      { children.map((child, index) => (
          <div className="tabs_tab_box" key={index}>{child}</div>
      )) }
    </div>
  )
}

export default Tabs
