import React, { Component } from "react";
import "./App.css";

class App extends Component {
  change = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    let { fname = "", lname = "" } = this.state || {};
    console.log(`rendering \nfname ${fname} \nlname ${lname}`);
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
      </div>
    );
  }
}

export default App;
