import { Component } from "react";


export default class Subject extends Component{
    render() {
        console.log('Subject render');
        return (
          <header>
            <h1><a href="/">{this.props.title}</a></h1>
            Header text {this.props.Text}
          </header>
        );
    }
  }