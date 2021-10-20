import React, { Component } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import "./task.scss";

export default class Task extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      /**
       * bonus
       */

      sortedByDate: false,
    };
  }

  addTask = (task) => {
    /**
     * Что было не правильно я попался на мутации state
     * надо быть внимательным, 5 минут перерыва
     */
    this.setState((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: state.tasks.length || 0,
          text: task,
          date: new Date(),
          done: false,
        },
      ],
    }));
  };

  get activeTask() {
    return this.state.tasks.filter((el) => !el.done).length;
  }

  /**
   *
   * Bonus сортировка по дате
   */

  get sortedTasks() {
    if (this.state.sortedByDate) {
      return this.state.tasks.sort((a, b) => a.date - b.date);
    }
    return this.state.tasks.sort((a, b) => a.done - b.done);
  }

  /**
   *
   * Нужно написать функции которые изменяю значание выполнены в таске
   */

  render() {
    return (
      <div className={"Task-container"}>
        <p>Active tasks:{this.activeTask}</p>
        <input
          type="checkbox"
          onChange={() =>
            this.setState((state) => ({ sortedByDate: !state.sortedByDate }))
          }
          checked={this.state.sortedByDate}
        />
        <div className={"TaskList-container"}>
          {this.sortedTasks.map(({ id, done, text }) => (
            <TaskList key={id} done={done} text={text} />
          ))}
        </div>
        <TaskInput addTaskProp={(task) => this.addTask(task)} />
      </div>
    );
  }
}
