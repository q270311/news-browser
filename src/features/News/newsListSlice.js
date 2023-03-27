import { createSlice } from "@reduxjs/toolkit";

const newsListSlice = createSlice({
    name: "news",
    initialState: {
        countryCode: "",
        articles: [],
        status: "loading"
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
    },
});
export const {
    fetchDataSuccess,
    fetchDataError,
    setCountry,
} = newsListSlice.actions;

export const selectNewsListState = (state) => state.news;
export const selectCountry = (state) => selectNewsListState(state).countryCode;
export const selectTotalResults = (state) => selectArticles(state).length;
export const selectArticles = (state) => selectNewsListState(state).articles;
export const selectStatus = (state) => selectNewsListState(state).status;

export default newsListSlice.reducer;
