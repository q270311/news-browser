import { all } from "redux-saga/effects";
import { watchFetchNews } from "../features/News/newsSaga";
import { watchFetchLanguageApp } from "../features/Header/languageAppSaga";

export default function* rootSaga() {
  yield all([
    watchFetchNews(), 
    watchFetchLanguageApp()
  ]);
}
