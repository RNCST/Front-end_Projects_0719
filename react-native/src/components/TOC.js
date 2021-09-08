import { Component } from "react";

export default class TOC extends Component{
    render() {
        console.log('TOC render');
        // let lists = [];
        // let data = this.props.data;
        // let i =0;
        // while (i < data.length) {
        //     lists.push(
        //         <li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>
        //     );
        //     i = i++;
        // }

      return (
        <nav>
          <h3>
            {/* {lists} */}
          </h3>
        </nav>
      )
    }
  }