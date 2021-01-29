import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/shop/hats/hats.component";

function App() {
  return (
    <div className="main-container">
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
