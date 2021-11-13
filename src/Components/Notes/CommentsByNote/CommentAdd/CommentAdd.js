import React, { useState } from "react";
// import faker from "faker";
import "./style.css";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react";

export default function CommentAdd({ setList }) {
  const [formData, setFormData] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { v4: uuidv4 } = await import(
      /* webpackChunkName: "downloadUUID" */ "uuid"
    );
    console.log(uuidv4());

    setList((state) => [
      ...state,
      {
        ...formData,
        // id: faker.datatype.uuid() // defalt static import
        id: uuidv4(), // specify dynamic import
      },
    ]);
    setFormData({});
  };

  //   console.log(formData);
  //{author: 'Liza', text: 'Good day'}

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form-add">
        <label>
          {" "}
          Your Name
          <input
            name="author"
            value={formData.author || ""}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          {" "}
          Your Comment
          <input
            name="text"
            value={formData.text || ""}
            onChange={onChangeHandler}
          />
        </label>
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
