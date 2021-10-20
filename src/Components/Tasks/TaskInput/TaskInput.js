import React, { Component } from "react";
import "./taskInput.scss";

export default class TaskInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  onInputChange(event) {
    this.setState({ input: event.target.value });
  }

  onButtonClick = () => {
    const { input } = this.state;

    if (input) {
      this.props.addTaskProp(input);
      this.setState({ input: "" });
    }
  };

  render() {
    // console.log(addTask, this.state.input);
    return (
      <div className={"TaskInput-container"}>
        <input
          className={"TaskInput-container_input"}
          onChange={(event) => this.onInputChange(event)}
          value={this.state.input}
        />
        <button
          className={"TaskInput-container_button"}
          onClick={this.onButtonClick}
        >
          ADD
        </button>
      </div>
    );
  }
}
