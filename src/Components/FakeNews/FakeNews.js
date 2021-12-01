import React, { useEffect, useState } from "react";
import MainNews from "./MainNews";
import MyNewsContext from "./context";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../redux/actions/newsAction";

export default function FakeNews() {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <>
      <MyNewsContext.Provider value={{ news }}>
        <MainNews />
      </MyNewsContext.Provider>
    </>
  );
}
