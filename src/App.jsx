import React, { useEffect } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Nav from "./components/navigation";
import WebFont from 'webfontloader'
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "./utils/axios"

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

  const { isLoading, data } = useQuery('me', () => {
    return axios.get('/me');
  })

  const queryClient = useQueryClient();
  const {isLoading: isLoggingOut, mutate} = useMutation(() => {
    return axios.post('logout');
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('me');
    }
  })

  const Loggedinlinks = () => {

    return (
      <>
        <li onClick={mutate} className="nav_link">
          {isLoggingOut? "Logging Out" : "logout" }
        </li>
        <Link to="/blogs/create">
          <li className="nav_link primary bigger">
            Start Writing
          </li>
        </Link>
      </>
  )}

  const Loggedoutlinks = () => {
    return (
    <>
      <Link to="/login">
        <li className="nav_link">
          login
        </li>
      </Link>
      <Link to="/signup">
        <li className="nav_link primary">
          signup
        </li>
      </Link></>
  )}

  return (
    <div className="App">
      <Nav>
        <Link to="/blogs">
          <li className="nav_link">
            blogs
          </li>
        </Link>
        { !isLoading ? 
            data.data.user === null ? <Loggedoutlinks/> : <Loggedinlinks/>
            : <Loggedoutlinks/> }
      </Nav>
      <Outlet/>
    </div>
  );
}

export default App;
