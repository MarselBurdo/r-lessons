import React, { Component } from "react";
import "./taskList.scss";

export default class TaskList extends Component {
  /**
   *
   * сюда пропасми нужно передать функцию которая по чекбоксу отмечает выполненность таски
   */

  render() {
    const { id, done, text, description, isRequiredTask, taskDone } =
      this.props;
    return (
      <div className={`TaskList-container_body ${done ? "doneTask" : ""}`}>
        <h2 className={"TaskList-container_title"}>{text}</h2>
        <p>{description}</p>

        <label>
          <input
            type="checkbox"
            checked={isRequiredTask}
            className={"TaskList-container_checkbox"}
            disabled={true}
          />{" "}
          обязательная Задача от мамы
        </label>
        <input
          type="checkbox"
          id={id}
          name="done"
          //проблема была тут
          // checked={done}
          disabled={done}
          className={"TaskList-container_checkbox"}
          onClick={taskDone}
        />
      </div>
    );
  }
}
