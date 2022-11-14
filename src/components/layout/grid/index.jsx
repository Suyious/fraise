import React, {useLayoutEffect, useState} from 'react';
import ImageCard from '../../cards/imagecard';
import "./style.css"

const Grid = ({blogs}) => {
  
  const [num_of_columns, set_num_of_columns] = useState(3);
  let grid = [];

  useLayoutEffect(() => {
    const resizeHandler = () => {
      if(window.innerWidth < 750) set_num_of_columns(1);
      else if(window.innerWidth < 1050) set_num_of_columns(2);
      else set_num_of_columns(3);
    }
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, []);

  for(let i = 0; i < num_of_columns; i++) grid.push([]);

  blogs.forEach(( blog, index ) => {
    grid[index % num_of_columns].push(blog);
  });

  return (
    <div className="grid">
      {grid.map((col, i) => (
          <div className="grid_col" style={{"width": `${ 100 / num_of_columns }%`}} key={i}>{
            col.map((blog, j) => (<div className="grid_image"key={j}>
                  <ImageCard blog={blog} />
              </div>))
          }</div>
      ))}
    </div>
  )
}

export default Grid;
