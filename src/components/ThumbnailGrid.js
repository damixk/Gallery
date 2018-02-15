import React from "react";
import { Link } from "react-router";
import Masonry from "react-masonry-component";

export default class ThumbnailGrid extends React.Component {

  render() {
    return (
     
      <Masonry
          className={'thumbnail-grid'}
          options={{transitionDuration: 100}}
      >
         {this.props.list.map((listValue) => {
          return (
            <div className="thumbnail-box col-lg-3 col-md-4 col-sm-6 col-xs-12" key={listValue.id}>
              <div className="thumbnail">
              <a className="thumb-title" href={listValue.url}>
                
                <img src={listValue.thumbnail} alt={listValue.name} />
                <p title={listValue.name}>
                  {listValue.name}</p>
                  <div className="clear"></div>
                </a>
              </div>
            </div>
          )
        })}
     </Masonry>
      );
  }
}

