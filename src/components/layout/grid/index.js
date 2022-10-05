import React, {useEffect, useState} from 'react';
import ImageCard from '../../cards/imagecard';
import "./style.css"

const Grid = ({images}) => {
  
  const [num_of_columns, set_num_of_columns] = useState(3);
  let grid = [];

  const resizeHandler = () => {
    if(window.innerWidth < 750) set_num_of_columns(1);
    else if(window.innerWidth < 1050) set_num_of_columns(2);
    else set_num_of_columns(3);
    console.log(window.innerWidth);
  }

  useEffect(resizeHandler, []);

  useEffect(() => {
    const listener = window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', listener)
    }
  },[])

  for(let i = 0; i < num_of_columns; i++) grid.push([]);

  images.forEach(( image, index ) => {
    grid[index % num_of_columns].push(image);
  });

  return (
    <div className="grid boxwidth">
      {grid.map((col, i) => (
          <div className="grid_col" style={{"width": `${ 100 / num_of_columns }%`}} key={i}>{
            col.map((image, j) => (<div className="grid_image"key={j}>
                  <ImageCard image={image} />
              </div>))
          }</div>
      ))}
    </div>
  )
}

export default Grid;
