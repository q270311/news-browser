import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    viewMode: "list",
    countryCode: null,
    articles: null,
    status: "initial",
  },
  reducers: {
    fetchDataSuccess: (state, { payload }) => {
      state.status = "loading";
      state.articles = payload.data.articles;
      state.status = "success";
    },
    fetchDataError: (state) => {
      state.status = "error";
    },
    setCountry: (state, { payload }) => {
      state.status = "loading";
      state.countryCode = payload.countryCode;
    },
    setView: (state, { payload }) => {
      state.viewMode = payload;
    },
  },
});
export const { fetchDataSuccess, fetchDataError, setCountry, setView } =
  newsSlice.actions;

export const selectNewsState = (state) => state.newsSlice;
export const selectCountry = (state) => selectNewsState(state).countryCode;
export const selectArticles = (state) => selectNewsState(state).articles;
export const selectTotalResults = (state) =>
  selectArticles(state) ? selectArticles(state).length : 0;
export const selectStatus = (state) => selectNewsState(state).status;
export const selectView = (state) => selectNewsState(state).viewMode;

export default newsSlice.reducer;
