import React, { PureComponent } from "react";

class Counter extends PureComponent {
  componentDidMount() {
    console.log(this.props);
  }
  onInc = e => this.props.onInc(this.props.index);
  onDec = e => this.props.onDec(this.props.index);
  render() {
    let { value: count } = this.props;
    return (
      <div>
        <input type="button" value="decrement" onClick={this.onDec} />
        &nbsp;&nbsp;{count}&nbsp;&nbsp;
        <input type="button" value="increment" onClick={this.onInc} />
      </div>
    );
  }
}

export default Counter;
