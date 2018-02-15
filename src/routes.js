import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory  } from "react-router";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Submit from "./pages/Submit";
import Review from "./pages/Review";
import InternalServerError from "./pages/500";

const Routes = (props) => (
  <Router {...props} >
    <Route path="/" component={Layout}>
      //<IndexRoute component={Home}/>
      <Route path="search/:query" component={Search}/>
      <Route path="500" component={InternalServerError}/>
      <Route path="about" component={About}/>
      //<Route path="submit" component={Submit}/>

      <Route path="rvew" component={Review}/>

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
