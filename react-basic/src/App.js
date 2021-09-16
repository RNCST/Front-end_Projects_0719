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
      selected_content_id:1,
      subject: { title: "WEB", Text: "WebTtext" },
      welcome: { title: "welcome", desc: "Hello React" },
      contents: [
        { id: 1, title: "title1", desc: "title1 description" },
        { id: 2, title: "title2", desc: "title2 description" },
        { id: 3, title: "title3", desc: "title3 description" },
      ],
    };
  }

  render() {
    console.log("App render");
    let _title,_desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      let i = 0;
      while(i < this.state.contents.length ){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i++;
      }

    }
    return (
      <div className="App">
        {
          <Subject
            title={this.state.subject.title}
            Text={this.state.subject.Text}
            onChangePage={function () {
              alert("pageClickEvent");
              this.setState({
                mode: "welcome",
              });
            }.bind(this)}
          ></Subject>
        }

        <TOC
          onChangePage={function (key) {
            alert('onChange Page event')
            this.setState({
              mode: "read",
              selected_content_id: key
            })
            console.log("key => " + key);
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
