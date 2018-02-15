import React from "react";
import ThumbnailGrid from "../components/ThumbnailGrid";
import { Link } from "react-router";

import axios from 'axios';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      featured: [],
      offset: 0,
      count: 0
    }
  }
  componentDidMount(){
      axios.get(`/api/thumbnail/search/${this.props.params.query}`)
      .then(function(res){

            this.setState({
              featured: res.data,
              count: res.data[0].count
            })

        }.bind(this))
    document.title =this.props.params.query + " - Search on Gallery.al";
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.location.query.offset){
        axios.get(`/api/thumbnail/search/${nextProps.params.query}/${nextProps.location.query.offset}`)
        .then(function(res){
          if(res.data == ""){
             this.setState({
              featured: [],
              count: 0
            })
          }else{
            this.setState({
              featured: this.state.featured.concat(res.data),
              count: this.state.offset + 10
            })
          }
          }.bind(this))
        }else{
        axios.get(`/api/thumbnail/search/${nextProps.params.query}`)
        .then(function(res){
          if(res.data == ""){
             this.setState({
              featured: [],
              count: 0
            })
          }else{
            this.setState({
              featured: res.data,
              count: res.data[0].count

            })
          }
          }.bind(this))
        }
        document.title =nextProps.params.query + " - Search on Gallery.al";
    }
  render() {
    let loadBtn;
    if(this.state.offset + 10 < this.state.count){
      loadBtn = <Link to={ { pathname:this.props.location.pathname, query:{ offset: this.state.offset + 10 } }}>
              <div className="load-more" title="Load more" >Load More</div>
            </Link>;
    }else{
      loadBtn = null;
    }
    return (
      <div>
        <div className="container-fluid">
          <div className="search-title">Showing {this.state.count} results for: <span>{this.props.params.query} </span></div>

              <ThumbnailGrid list={this.state.featured}/>

              { loadBtn }

        </div>
            <footer><Link to="about">About</Link><span className="hint"></span></footer>
      </div>
    );
  }
}
