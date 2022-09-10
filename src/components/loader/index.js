import React, {useEffect, useRef, useState} from "react";
import "./style.css"

const Loader = () => {

  const [progress, setProgress] = useState(0);
  const [delayed, setDelayed] = useState(false);
  const requestRef = useRef();
  const prevtimeRef = useRef();

  const animate = time => {
    if(prevtimeRef.current !== undefined){
      const deltaTime = time - prevtimeRef.current;
      setProgress(prevCount => (prevCount + deltaTime * 0.01) % 100);
    }
    prevtimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
    }
  },[])

  useEffect(() => {
    let timeout;
    timeout = setTimeout(()=>{
      setDelayed(true);
    },3000)
    return () => {
      clearTimeout(timeout);
    }
  },[])

  return(
    <div className="loader main">
      <div className="loader_status">
        {delayed && <div className="loader_message">The heroku server can be quite slow at time. Please bear with us.</div>}
        <h1>{Math.round(progress)}%</h1>
      </div>
      <div style={{"width": `${progress}%`}} className="loader_progress"></div>
    </div>
  )
}

export default Loader;
