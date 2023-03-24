import { all } from "redux-saga/effects";
import { watchFetchNews } from '../features/newsListSaga';

export default function* rootSaga() {
    yield all([
        watchFetchNews(),
    ]);
}