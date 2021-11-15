import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Searchbar from "./components/Searchbar.js";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered is-size-4">
          Got activity ideas for your trip? Find parks that support them!
        </h2>
        <Searchbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
