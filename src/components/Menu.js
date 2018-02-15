import React from "react";
import SearchForm from "./Menu/SearchForm";
import { Link } from "react-router";

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid menu">
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li></li>
            </ul>
            <SearchForm />
            
          </div>
        </div>
      </nav>
    );
  }
}

