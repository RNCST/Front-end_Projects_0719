import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">
      <Subject title="WEB" Text="WebText"></Subject>
      <Subject title="REACT" Text="REACTTtext"></Subject>
      <TOC list1Titie="list1" list2Titie="list2" list3Titie="list3"></TOC>
      <Contents title="Contenst title" desc="description"></Contents>
    
      </div>;
  }
}

class Subject extends Component{
  render() {
      return (
        <header>
          <h1>{this.props.title}</h1>
          Header text {this.props.Text}
        </header>
      );
  }
}

class TOC extends Component{
  render() {
    return (
      <nav>
        <h3>
        <li>1.{this.props.list1Titie}</li>
        <li>2.{this.props.list2Titie}</li>
        <li>3.{this.props.list3Titie}</li>
        </h3>
      </nav>
    )
  }
}

class Contents extends Component{
  render(){
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

export default App;
