import { configureStore } from "@reduxjs/toolkit";
import newsListReducer from '../features/newsListSlice';

const store = configureStore({
    reducer: {
        news: newsListReducer,
    },
});

export default store;