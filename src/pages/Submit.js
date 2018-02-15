import React from "react";
import SubmitForm from "../components/Submit/SubmitForm";

export default class Submit extends React.Component {
    componentDidMount() {
        document.title = "Gallery.al | Submit";
     }
   
  render() {
    return (
        <SubmitForm/> 
    );
  }
}
