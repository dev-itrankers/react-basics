import React, { Component } from "react";
import "./App.css";
import Counter from "./counter";
class App extends Component {
  state = { count: [1, 2, 5, 0] };
  inc = ind => {
    let count = [...this.state.count];
    count[ind] = ++count[ind];
    this.setState({ count });
  };
  dec = ind => {
    let count = [...this.state.count];
    count[ind] = --count[ind];
    if (count[ind] < 0) return;
    this.setState({ count });
  };

  render() {
    let { count } = this.state || {};
    return (
      <div>
        <p>Total : {count.filter(x => x > 0).length}</p>
        {count.map((val, index) => (
          <Counter
            key={index}
            index={index}
            value={val}
            onInc={this.inc}
            onDec={this.dec}
          />
        ))}
      </div>
    );
  }
}

export default App;
