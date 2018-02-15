import React from "react";
import Menu from "./Menu";

export default class Layout extends React.Component {
  changeTitle(title) {
    this.setState({title});
  }
  componentWillReceiveProps(nextProps){

    }
  render() {
    return (
      <div>

        <Menu />
        {React.cloneElement(this.props.children)}
        
      </div>
    );
  }
}