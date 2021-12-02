import { Button as AntButton } from "antd";
import React, { Component } from "react";
import "./taskInput.scss";

import Button from "../../Button/Button";

const initialState = {
  title: "",
  description: "",
  date: "",
  isRequiredTask: false,
};

export default class TaskInput extends Component {
  state = {
    ...initialState,
  };

  onInputChange = (event) => {
    /**
     * вытащили необходимые данные
     */
    const { value, name, type, checked } = event.target;

    /**
     * Изменения сотсояния Компонента
     */
    this.setState({ [name]: type !== "checkbox" ? value : checked });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    const { title, description, date, isRequiredTask } = this.state;

    console.log(this.validationInputs());

    if (this.validationInputs()) {
      this.props.addTaskProp({ title, description, date, isRequiredTask });
      this.setState({ ...initialState });
    } else {
      alert("Write inputs");
    }
  };

  validationInputs = () => {
    for (let field in this.state) {
      if (!this.state[field]) return false;
    }

    /**
     * все работало нехватало этой строки мы не учли что люди все таки заполнят все инпуты!!!!!!!
     *
     */
    return true;
  };

  render() {
    const { title, description, date, isRequiredTask } = this.state;

    return (
      <form onSubmit={this.onSubmitHandle} className={"TaskInput-container"}>
        <input
          name="title"
          type="text"
          className={"TaskInput-container_input"}
          onChange={this.onInputChange}
          value={title}
        />
        <input
          name="description"
          type="text"
          className={"TaskInput-container_input"}
          onChange={this.onInputChange}
          value={description}
        />
        <input
          name="date"
          type="date"
          className={"TaskInput-container_input"}
          onChange={this.onInputChange}
          value={date}
        />
        <select onChange={console.log} className={"TaskInput-container_input"}>
          <option value={1}>ASAP</option>
          <option value={2}>No AsAP</option>
          <option value={3}>No Idea Бщзешщт мфдгу=Х3ЪЮТщ ШвуфБ/щзешщтЮ</option>
        </select>
        <input
          name="isRequiredTask"
          type="checkbox"
          className={"TaskInput-container_input"}
          onChange={this.onInputChange}
          checked={isRequiredTask}
        />

        {/* old version */}
        {/* <button
          className={"TaskInput-container_button"}
         
        >
          ADD
        </button> */}
        <Button text={"Send form"} onClick={console.log} />

        <AntButton>Ant Design</AntButton>
      </form>
    );
  }
}
