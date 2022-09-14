import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Blogs_old from "./Blogs/Blogs";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Nav from "./components/navigation";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }, []);

  return (
    <Router basename="">
      <div className="App">
        <Nav>
          <li className="nav_link">
            <Link to="/blogs">blogs</Link>
          </li>
          {/*
            <li className="nav_link">
            <Link to="/blogs-old">blogs'</Link>
            </li>
            */}
          <li className="nav_link">
            <Link to="/login">login</Link>
          </li>
          <li className="nav_link primary">
            <Link to="/signup">signup</Link>
          </li>
        </Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs-old" exact component={Blogs_old} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
