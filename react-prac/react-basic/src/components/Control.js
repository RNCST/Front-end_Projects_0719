import { Component } from "react";


export default class Control extends Component{
    render() {
        console.log('Control render');
        return (
          <header>
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            Header text {this.props.Text}
          </header>
        );
    }
  }