import {Component} from "react";


export default class Contents extends Component{
    render(){
        console.log('Content render');
      return (
        <article>
        <h3>
          {this.props.title}
        </h3>
        {this.props.desc}
        </article>
      )
    }
  }