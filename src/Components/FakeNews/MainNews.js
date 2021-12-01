import React, { useContext, useMemo, useRef, useState } from "react";
import { Card } from "antd";
import MyNewsContext from "./context";

import "./style.css";
import CountNews from "./CountNews";
import CountNewsReducer from "./CountNewsReducer";
import { useSelector } from "react-redux";

export default function MainNews() {
  const loading = useSelector((state) => state.loading);
  const [inputText, setInpunText] = useState("");

  const inputRef = useRef(null);

  const { news } = useContext(MyNewsContext);

  const altImg =
    "https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1";

  // const resultArray = news
  //   .filter((el) => {
  //     return el.title.toLowerCase().indexOf(inputText.toLowerCase()) >= 0;
  //   })
  //   .map(({ publishedAt, title, urlToImage, description }) => (
  //     <Card key={publishedAt} hoverable={true} className={"Container-body"}>
  //       <h3>{title}</h3>
  //       <img
  //         src={urlToImage ? urlToImage : altImg}
  //         alt={"img"}
  //         width="400"
  //         height="300"
  //       />
  //       <p>{description}</p>
  //     </Card>
  //   ));

  const resultArray = useMemo(() => {
    return news
      .filter((el) => {
        return el.title.toLowerCase().indexOf(inputText.toLowerCase()) >= 0;
      })
      .map(({ publishedAt, title, urlToImage, description }) => (
        <Card key={publishedAt} hoverable={true} className={"Container-body"}>
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
  }, [news, inputText]);

  const handleOnChange = (e) => {
    // console.log(inputRef.current);
    // setInpunText(inputRef.current.value);
    setInpunText(e.target.value);
    inputRef.current.style.color = "red";
    inputRef.current.style.padding = "5px";
  };

  return (
    <div className={"Container"}>
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        className={"Container-header"}
        onChange={handleOnChange}
      />
      {/* <CountNews /> */}
      {loading && <h3>loading data</h3>}
      <div className={"Container-container"}>{resultArray}</div>
    </div>
  );
}
