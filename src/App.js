import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Blog from "./pages/blogs/[blog]";
import BlogCreate from "./pages/blogs/create";
import Nav from "./components/navigation";
import NotFound from "./components/errors/notfound";
import WebFont from 'webfontloader'
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "./utils/axios"
import EditProfile from "./pages/user/edit";
import ComingSoon from "./components/errors/comingsoon";

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

  // const Maintenance = () => <ComingSoon message="We are porting fraise from heroku to render. This might take 24 hours."/>

  return (
    <Router basename="">
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/create" exact component={BlogCreate} />
          <Route path="/blogs/:blog" exact component={Blog} />
          <Route path="/user/edit" exact component={EditProfile} />
          <Route path="/user/:user" exact component={ComingSoon} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
