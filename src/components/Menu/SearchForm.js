import React from "react";

export default class SearchForm extends React.Component {
  handleSubmit(){
    if(this.refs.search.value.trim()  != ""){
      const search = this.refs.search.value;
      this.refs.search.value = "";
      window.location = "/search/"+search;
    }
  }

  render() {
    return (
      <form className="navbar-form navbar-left search-form" role="search" onSubmit={() => this.handleSubmit()}>
              <div className="form-group">
                <input type="text" className="form-control search-field" placeholder="Search"  ref="search" />
              <button type="submit" className="btn btn-default hidden-xs" >
                <i className="fa fa-search" ></i>
              </button>
              </div>
      </form>
    );
  }
}
