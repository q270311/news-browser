import { call, put, takeLatest, select } from 'redux-saga/effects';
import { selectCountry, setCountry, fetchDataSuccess, fetchDataError } from './newsSlice';
import { searchNews } from './getDataFromNewsAPI';

function* fetchNewsHandler() {
  try {
    const countryCode = yield select(selectCountry);
    const data = yield call(searchNews, { countryCode: countryCode });
    yield put(fetchDataSuccess({ data }));
  } catch (error) {
    yield put(fetchDataError());
  }
}

export function* watchFetchNews() {
  yield takeLatest(setCountry.type, fetchNewsHandler);
}
