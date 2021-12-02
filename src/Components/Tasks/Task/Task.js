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
    const { title, description, date, isRequiredTask } = task;
    /**
     * Что было не правильно я попался на мутации state
     * надо быть внимательным, 5 минут перерыва
     */
    this.setState((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: state.tasks.length || 0,
          text: title,
          description,
          date: new Date(),
          isRequiredTask,
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
    return this.state.tasks.sort((a, b) => b.isRequiredTask - a.isRequiredTask);
  }

  /**
   *
   * Нужно написать функции которые изменяю значание выполнены в таске
   */

  taskdoneHandler = (id) => {
    // console.log({ name, checked, id });

    // this.setState({ [name]: !checked });

    /**
     * упростил функцию смострите внимательно  в map
     */
    this.setState(({ tasks }) =>
      tasks.map((task) => (task.id === id ? (task.done = true) : task))
    );
  };

  render() {
    const { tasks } = this.state;
    console.log(tasks);
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
          {this.sortedTasks.map(
            ({ id, done, text, description, isRequiredTask }) => (
              <TaskList
                key={id}
                id={id}
                done={done}
                text={text}
                description={description}
                isRequiredTask={isRequiredTask}
                // тут просто передал номер данной таски
                taskDone={() => this.taskdoneHandler(id)}
              />
            )
          )}
        </div>
        <TaskInput addTaskProp={(task) => this.addTask(task)} />
      </div>
    );
  }
}
