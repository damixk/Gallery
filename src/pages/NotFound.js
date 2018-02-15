import React from "react";

export default class File extends React.Component {
    componentDidMount() {
        document.title = "Gallery.al | Error 404";
     }
  render() {
    return (
        <div classNameName="about-content col-xs-11 col-md-11 col-lg-11">
          <div className="not-found">
              <div className="not-found-title col-xs-12 col-md-12 col-lg-8">
            404
              </div>
              <div className="not-found-text col-xs-12 col-md-12 col-lg-8">
                  <br/>
                  Page is missing. Try going to
                  <a href="/"> Main page</a><br/><br/><br/><br/>
                  <span className="hint">error 404</span>
              </div>
          </div>
        </div>
    );
  }
}
