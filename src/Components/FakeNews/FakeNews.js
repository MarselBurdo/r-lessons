import React, { useEffect } from "react";
import MainNews from "./MainNews";

import { useDispatch } from "react-redux";
import { getNews } from "../../redux/actions/newsAction";

export default function FakeNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <>
      <MainNews />
    </>
  );
}
