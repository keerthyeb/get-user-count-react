import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.getCount = this.getCount.bind(this);
  }

  getCount(event) {
    fetch("/getCount")
      .then(res => res.text())
      .then(count => this.setState({ count }));
  }
  render() {
    return (
      <div className="App">
        <div>count : {this.state.count}</div>
        <button onClick={this.getCount}>click me</button>
      </div>
    );
  }
}

export default App;
