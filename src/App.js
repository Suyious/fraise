import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Blogs from "./Blogs/Blogs";
// import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route path="/fraise" exact component={Home}/>
          <Route path="/fraise/blogs" component={Blogs}/>
          {/* <Route path="/fraise/login" component={Login}/> */}
          {/* <Route path="/fraise/signin" component={Signin}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
