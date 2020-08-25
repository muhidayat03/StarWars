import React from "react";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Film from "./pages/Film";
import People from "./pages/People";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Film} />
        <Route path="/people" exact component={() => <div>{People}</div>} />
        <Route path="/:filmId" exact component={() => <div>Film Detail</div>} />

        {/* <Route component={() => <Redirect to="/" />} /> */}
      </Switch>
    </>
  );
}

export default App;
