import React from "react";
import { Link } from "react-router";

export default class About extends React.Component {
    componentDidMount() {
        document.title = "Gallery.al | About";
     }
  render() {
    return (
      <div className="about-content col-xs-12 col-md-10 col-lg-10">
        <div className="about-side col-xs-12 col-md-5 col-lg-3">
          <div className="about-pic center-block">
          </div>
          <div className="about-contact">
            <p>@twitter</p>
            <p><a href="">admin@gallery-al</a></p>
          </div>
        </div>
        <div className="about-text col-xs-12 col-md-6 col-lg-8">
            <div className="about-title">
                <h2>About</h2>
            </div>
            <ul className="about-list">

            </ul>
            <Link to="/">Home</Link>
        </div>

    </div>
      );
  }
}
