import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import BlogContainer from "./components/BlogContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      blogList: [],
    };
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/catblogs/")
      .then(res => this.setState({ blogList: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.refreshList();
  }

  render() {
    return (
      this.state.blogList.map(item => (
        <BlogContainer
          title={item.title}
          description={item.description}
          date={item.date}
          image={item.image}
        />
      ))
    );
  }
}
export default App;