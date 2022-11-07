import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Nav from "./components/navigation";
import { Link } from "react-router-dom";
import Blog from "./pages/blogs/[blog]";
import NotFound from "./components/errors/notfound";
import WebFont from 'webfontloader'
import BlogCreate from "./pages/blogs/create";

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
    <Router basename="">
      <div className="App">
        <Nav>
          <Link to="/blogs">
            <li className="nav_link">
              blogs
            </li>
          </Link>
          {false ?
              <Link to="/blogs/create">
              <li className="nav_link primary bigger">
                Start Writing
              </li>
            </Link>
            : <>
              <Link to="/login">
                <li className="nav_link">
                  login
                </li>
              </Link>
              <Link to="/signup">
                <li className="nav_link primary">
                  signup
                </li>
              </Link></>}
        </Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/create" exact component={BlogCreate} />
          <Route path="/blogs/:blog" exact component={Blog} />
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
