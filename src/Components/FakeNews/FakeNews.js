import React, { useEffect, useState } from "react";
import MainNews from "./MainNews";
import MyNewsContext from "./context";

export default function FakeNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    )
      .then((r) => r.json())
      .then((response) => setNews(response.articles));
  }, []);

  return (
    <>
      <MyNewsContext.Provider value={{ news, setNews }}>
        <MainNews />
      </MyNewsContext.Provider>
    </>
  );
}
