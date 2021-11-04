import React, { useContext, useRef, useState } from "react";
import { Card } from "antd";
import MyNewsContext from "./context";

import "./style.css";

export default function MainNews() {
  const [inputText, setInpunText] = useState("");

  const inputRef = useRef(null);

  const { news } = useContext(MyNewsContext);

  const altImg =
    "https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1";

  const resultArray = news
    .filter((el) => {
      return el.title.toLowerCase().indexOf(inputText.toLowerCase()) >= 0;
    })
    .map(({ publishedAt, title, urlToImage, description }) => (
      <Card key={publishedAt} hoverable={true}>
        <h3>{title}</h3>
        <img
          src={urlToImage ? urlToImage : altImg}
          alt={"img"}
          width="400"
          height="300"
        />
        <p>{description}</p>
      </Card>
    ));

  const handleOnChange = (e) => {
    // console.log(inputRef.current);
    // setInpunText(inputRef.current.value);
    setInpunText(e.target.value);
    inputRef.current.style.color = "red";
    inputRef.current.style.padding = "5px";
  };

  //   console.log(inputText);

  return (
    <div className={"Container"}>
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        className={"Container-header"}
        onChange={handleOnChange}
      />
      <div className={"Container-body"}>{resultArray}</div>
    </div>
  );
}
