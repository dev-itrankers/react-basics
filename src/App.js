import React, { Component } from "react";
import "./App.css";

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
    console.log(`Rendering`);
    return (
      <div>
        <input
          type="text"
          name="fname"
          value={fname}
          placeholder="fname"
          onChange={this.change}
        />
        <input
          type="text"
          name="lname"
          value={lname}
          placeholder="lname"
          onChange={this.change}
        />
        <input type="button" value="clickMe" onClick={this.onBtnClick} />
      </div>
    );
  }
}

export default App;
