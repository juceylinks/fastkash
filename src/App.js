import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import About from "./pages/about/about";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
