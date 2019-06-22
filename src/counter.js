import React, { PureComponent } from "react";

class Counter extends PureComponent {
  state = { count: 1 };
  inc = e => {
    let count = this.state.count;
    ++count;
    this.setState({ count });
  };
  dec = e => {
    let count = this.state.count;
    --count;
    if (count < 0) return;
    this.setState({ count });
  };
  render() {
    let { count } = this.state;
    console.log("Counter Rendering");
    return (
      <div>
        <input type="button" value="decrement" onClick={this.dec} />
        &nbsp;&nbsp;{count}&nbsp;&nbsp;
        <input type="button" value="increment" onClick={this.inc} />
      </div>
    );
  }
}

export default Counter;
