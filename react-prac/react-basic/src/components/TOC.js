import { Component } from "react";

export default class TOC extends Component{
    render() {
        console.log('TOC render');

      return (
        <nav>
          <h3>
            <li key='1'><a onClick={
              function(e){
                e.preventDefault();
                this.props.onChangePage(1);
                
              }.bind(this)
            } href={"/content/1"}>TITLE1</a></li>
            <li key='2'><a onClick={
              function(e){
                e.preventDefault();
                this.props.onChangePage(2);
              }.bind(this)
            }href={"/content/2"}>TITLE2</a></li>
            <li key='3'><a onClick={
              function(e){
                e.preventDefault();
                this.props.onChangePage(3);
              }.bind(this)
            }href={"/content/3"}>TITLE3</a></li>
          </h3>
        </nav>
      )
    }
  }