import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import WebFont from 'webfontloader';
import "./App.css";
import Nav from "./components/navigation";
import NavLinks from "./components/section/navlinks";

function App() {

  const resizeHandler = () => {
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
  }

  useEffect(resizeHandler, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler)
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto:100,200,300,400', 'Lato:400']
      }
    })
  }, []);

  return (
    <div className="App">
      <Nav>
        <NavLinks/>
      </Nav>
      <Outlet/>
    </div>
  );
}

export default App;
