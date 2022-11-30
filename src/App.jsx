import React, { useEffect } from "react";
import "./App.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/navigation";
import WebFont from 'webfontloader'
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "./utils/axios";
import {ReactComponent as NavDown} from "./assets/icons/navdownopen.svg"
import {ReactComponent as Hamburger} from "./assets/icons/hamburger.svg"
import Dropdown from "./components/dropdown";

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

    const navigate = useNavigate();

    const logout = () => {
      mutate(undefined, {
        onSuccess: () => {
          navigate("/");
        }
      });
    }

    return (
      <>
        {/* <!---MEANT FOR MOBILE RESPONSIVENESS---> */}
        <div className="mobile">
          <Dropdown visible={
            <li className="nav_link"><Hamburger/></li>
          }>
            <li className="nav_link"><Link to="user/dashboard">dashboard</Link></li>
            <li className="nav_link"><Link to="/user/edit">profile</Link></li>
            <li className="nav_link" onClick={mutate}>{isLoggingOut ? <span>loading</span> : <span>logout</span> }</li>
          </Dropdown>
        </div>
        <div className="desktop">
          <Dropdown visible={
            <li className="nav_link">
              account <NavDown/>
              </li> }>
            <li className="nav_link"><Link to="user/dashboard">dashboard</Link></li>
            <li className="nav_link"><Link to="/user/edit">profile</Link></li>
            <li className="nav_link" onClick={logout}>{isLoggingOut ? <span>loading</span> : <span>logout</span> }</li>
          </Dropdown>
        </div>
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

  const BlogCreateLinks = () => {
    return <>
        <li className="nav_link secondary bigger">
          Save as Draft
        </li>
        <li className="nav_link primary bigger">
          Publish
        </li>
      </>
  }

  const NavLinks = () => {
    const location = useLocation();
    if(location.pathname.search(/\/blogs\/create\/?$/) === 0) {
      return (
        <BlogCreateLinks/>
      )
    }
    return <>
      <Link to="/blogs">
        <li className="nav_link">
          blogs
        </li>
      </Link>
      { !isLoading ? 
          data.data.user === null ? <Loggedoutlinks/> : <Loggedinlinks/>
          : <Loggedoutlinks/> }
      </>
  }

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
