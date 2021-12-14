/* eslint-disable react/prop-types */
import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control"
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.inputValue}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
