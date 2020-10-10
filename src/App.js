import React from "react";
// import logo from './logo.svg';
import "./App.css";
import BigSearch from "./BigSearch";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <BigSearch />
      <div className="background__card">
        <img
          className="background__img"
          src="https://images.unsplash.com/photo-1602008672365-f4c4244c8034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          alt="nature"
        />
        <div className="background__card__blog">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus officia voluptatem adipisci hic quisquam. Nobis doloribus accusantium ipsa a odio neque repudiandae sint quam. Mollitia aut omnis maiores debitis!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
