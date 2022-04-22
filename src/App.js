import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Fraise from "./Home";
import Blogs from "./Blogs/Blogs";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Nav from "./components/navigation";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav>
          {/* <li className="nav_link">
            <Link to="/fraise/fraise">olds</Link>
          </li> */}
          <li className="nav_link">
            <Link to="/fraise/blogs">blogs</Link>
          </li>
          <li className="nav_link">
            <Link to="/fraise/login">login</Link>
          </li>
          <li className="nav_link">
            <Link to="/fraise/signup">signup</Link>
          </li>
        </Nav>
        <Switch>
          <Route path="/fraise/" exact component={Home} />
          <Route path="/fraise/fraise" exact component={Fraise} />
          <Route path="/fraise/blogs" exact component={Blogs} />
          <Route path="/fraise/signup" component={SignUp} />
          <Route path="/fraise/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
