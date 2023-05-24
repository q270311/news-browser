import { takeLatest, call, select } from 'redux-saga/effects';
import { toggleLanguageApp, selectLanguageApp } from './languageAppSlice';
import { saveLanguageInLocalStorage } from './languageLocalStorage';

function* saveLanguageInLocalStorageHandler() {
  const language = yield select(selectLanguageApp);
  yield call(saveLanguageInLocalStorage, language);
}

export function* watchFetchLanguageApp() {
  yield takeLatest(toggleLanguageApp.type, saveLanguageInLocalStorageHandler);
}
