import { GET_NEWS } from "../actionTypes";

// const putNewsInRedux = (info) => {
//   return {
//     type: GET_NEWS,
//     payload: info,
//   };
// };

export const getNews = () => {
  return async (dispatch) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const result = await response.json();
    // dispatch(putNewsInRedux(result.articles));
    dispatch({
      type: GET_NEWS,
      payload: result.articles,
    });
  };
};
