import React, { Component } from "react";
import "./App.css";
import Counter from "./counter";
class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    let state = this.state || {};
    let op = {};
    Object.keys(state).map(key =>
      state[key] === nextState[key] ? undefined : (op[key] = nextState[key])
    );
    console.log(op);
    return true;
  }
  change = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onBtnClick = e => {
    this.setState({});
  };

  render() {
    let { fname = "", lname = "" } = this.state || {};
    console.log(`App Rendering`);
    return (
      <div>
        <input type="text" value={fname} name="fname" onChange={this.change} />
        <Counter />
      </div>
    );
  }
}

export default App;
