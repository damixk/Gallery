import React from "react";

export default class Review extends React.Component {
    componentDidMount() {
        document.title = "Gallery.al | Error 500";
     }
  render() {
    return (
        <div className="about-content col-xs-11 col-md-11 col-lg-11">
          <div className="not-found">
              <div className="not-found-title col-xs-12 col-md-12 col-lg-8">
                  Oh no!
              </div>
              <div className="not-found-text col-xs-12 col-md-12 col-lg-8">
                  Something went wrong Please try it again.<br/>
                  <a href="">Main page</a><br/><br/><br/><br/>
                  <span className="hint">error 500</span>
              </div>
          </div>
        </div>
    );
  }
}
