import { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      subject: { title: "WEB", Text: "WebTtext" },
      welcome: { title: "welcome", desc: "Hello React" },
      contents: [
        { id: 1, title: "title1", desc: "title1 description" },
        { id: 2, title: "title2", desc: "title2 description" },
        { id: 3, title: "title3", desc: "title3 description" },
      ]
    }
  }

  render() {
    console.log('App render');
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          Text={this.state.subject.Text}
        ></Subject> */}
          <header>
            <h1><a href="/" onClick={function(event){
              console.log(event)
              event.preventDefault();
              // this.state.mode = 'read';
              this.setState({
                mode:'read'
              });
            }.bind(this)}>{this.state.subject.title}</a></h1>
            Header text => {this.state.subject.Text}
          </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
