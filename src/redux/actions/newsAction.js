import { createAsyncThunk } from "@reduxjs/toolkit";

// Try classic thunk with @redux-toolkit
// export const getNews = () => {
//   return async (dispatch) => {
//     const response = await fetch(
//       `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
//     );
//     const result = await response.json();
//     console.log(result);
//     dispatch(getNewsInRedux(result.articles));
//   };
// };

// export const getNewsInRedux = createAction("GET_NEWS");

export const getNews = createAsyncThunk(
  "fetchNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      const result = await response.json();
      return result.articles;
    } catch (err) {
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue("Error!");
    }
  }
);
