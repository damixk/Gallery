import React from "react";

export default class Submit extends React.Component {
  render() {
    return (
        <div className="new-image col-xs-12 col-md-8 col-lg-8">
          <form className="form-horizontal" id = "uploadForm" enctype ="multipart/form-data" 
          action = "/api/upload" method = "post">
            <input type="file" name="userFile" />
        <div className="form-group pull-right">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit <i className="fa fa-upload" aria-hidden="true"></i></button>
          </div>
        </div>
      </form>
      </div>
    );
  }
}
