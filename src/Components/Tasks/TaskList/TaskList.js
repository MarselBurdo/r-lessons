import React, { Component } from "react";
import "./taskList.scss";

export default class TaskList extends Component {
  /**
   *
   * сюда пропасми нужно передать функцию которая по чекбоксу отмечает выполненность таски
   */

  render() {
    const { done, text } = this.props;
    return (
      <div className={"TaskList-container_body"}>
        <p className={"TaskList-container_title"}>{text}</p>
        <input
          type="checkbox"
          checked={done}
          className={"TaskList-container_checkbox"}
        />
      </div>
    );
  }
}
