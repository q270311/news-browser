import { configureStore } from "@reduxjs/toolkit";
import newsSlice from '../features/News/newsSlice';
import languageAppSlice from '../features/Header/languageAppSlice'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        newsSlice: newsSlice,
        languageApp: languageAppSlice,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;