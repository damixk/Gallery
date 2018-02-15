import React from "react";
import ThumbnailGrid from "../components/ThumbnailGrid";
import SearchForm from "../components/Menu/SearchForm";
import { Link } from "react-router";

import axios from 'axios';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      featured: [],
      offset: 0,
      count: 0,
    }
  }
  componentDidMount(){
      axios.get(`/api/thumbnail/newest`)
      .then(function(res){
          this.setState({
            featured: res.data,
            count: res.data[0].count
          })
        }.bind(this))
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.location.query.offset){
        axios.get(`/api/thumbnail/newest/${nextProps.location.query.offset}`)
        .then(function(res){
            this.setState({
              featured: this.state.featured.concat(res.data),
              offset: this.state.offset + 10
            })
          }.bind(this))
        }
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

              <ThumbnailGrid list={this.state.featured}/>

              { loadBtn }

        </div>
            <footer><Link to="about">About</Link><span className="hint"></span></footer>
      </div>
    );
  }
}
