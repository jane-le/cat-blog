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
        date: "",
        image: ""
      },
      blogList: [],
    };
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick(item) {
    console.log(item);
    /*
    this.setState({
      activeItem: {
        title: "",
        description: "",
        date: "",
        image: ""
      }
    }) */
  }

  renderBlogList() {
    return (
    this.state.blogList.map(item => (
      <BlogContainer
        key={item.id}
        handleOnClick={this.handleOnClick}
        item={item}
      />
    )));
  }

  render() {
    return (
      <div className="container">
        <div className="header-container">
          <h1>Jane's Cat Blog</h1>
          <p>I write about my two cats Fluffina and Kitty Kitty. 🐱🐱</p>
        </div>
        {this.renderBlogList()}
      </div>
    );
  }
}
export default App;