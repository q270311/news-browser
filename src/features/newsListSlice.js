import { createSlice } from "@reduxjs/toolkit";

const newsListSlice = createSlice({
    name: "news",
    initialState: {
        countryCode: "US",
        totalResults: 0,
        articles: [],
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, {payload}) => {
            state.status="loading";            
            state.totalResults = payload.data.totalResults;
            state.articles = payload.articles;
            state.status = "success";
        },
        fetchDataError: (state) => {
            state.status = "error";
        },
        setCountry: (state, { payload }) => {
            state.status="loading";
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
export const selectTotalResults = (state) => selectNewsListState(state).totalResults;
export const selectArticles = (state) => selectNewsListState(state).articles;
export const selectStatus = (state) => selectNewsListState(state).status;

export default newsListSlice.reducer;
