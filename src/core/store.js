import { configureStore } from "@reduxjs/toolkit";
import newsSlice from '../features/News/newsSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        newsSlice: newsSlice,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;