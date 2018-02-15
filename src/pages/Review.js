import React from "react";
import axios from "axios";

export default class Review extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      file: []
    }
  }
  componentDidMount(){
     axios({ method: 'post', url: `/api/rev/another`,
        headers: {token: localStorage.getItem("login")}})
      .then(function(res){
          this.setState({
            file: res.data,
          })
        }.bind(this))
      document.title = "Gallery.al | Review";

  }
  decline(){
    axios({ method: 'post', url: `/api/rev/approve`,
        headers: {token: localStorage.getItem("login")},
        data: { type: 0, url: this.state.file.url}})
      .then(function(res){
            location.reload();
        }.bind(this))
  }
  skip(){
    console.log("skip")
  }
  allow(){
    axios({ method: 'post', url: `/api/rev/approve`,
        headers: {token: localStorage.getItem("login")},
        data: { type: 1 , url: this.state.file.url, tags: this.refs.tags.value}})
      .then(function(res){
            location.reload();
        }.bind(this))
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
        <div className="flag-box col-xs-11 col-md-11 col-lg-11">
            <div className="flag-thumbnail col-xs-8 col-sm-6 col-md-3 col-lg-3">
                <img className="thumbnail col-xs-12 col-md-12 col-lg-12"
                src={this.state.file.thumbnail}/>
            </div>
            <div className="flag-info col-xs-12 col-sm-6 col-md-8 col-lg-8">
                <div className="flag-detail"><span>Title: </span> {this.state.file.name}</div>
                <div className="flag-detail"><span>Author: </span>{this.state.file.author}</div>
                <div className="flag-detail"><span>Url: </span>{this.state.file.url}</div>
                <div className="flag-detail">
                  <span>Tags: </span>
                  <textarea className="form-control" ref="tags" value={this.state.file.tags} onChange={this.handleChange}>
                  </textarea>
                </div>
                <button type="submit" className="btn btn-danger" onClick={this.decline.bind(this)} >Decline</button>
                <button type="submit" className="btn btn-warning" onClick={this.skip.bind(this)}>Skip</button>
                <button type="submit" className="btn btn-success" onClick={this.allow.bind(this)}>Allow</button>
            </div>
        </div>
    );
  }
}
