import { call, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { addMusic, deleteMusic, getList } from "../apis/item";
import { STATUS_CODE } from "../constants/index";
import * as Actions from "./../actions/item";
import { hideLoading, hideModal, showLoading } from "./../actions/ui";
import * as Types from "./../constants/item";
function* watchFetchList() {
  while (true) {
    const action = yield take(Types.FETCH_LIST);
    const { params } = action.payload;
    yield put(showLoading());
    const resp = yield call(getList, params);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(Actions.fetchListSuccess(data));
    } else {
      yield put(Actions.fetchListFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}
function* addMusicSaga({ payload }) {
  yield put(showLoading());
  const { song } = payload;
  const resp = yield call(addMusic, song);
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(Actions.addMusicSuccess(data));
    yield put(hideModal());
  } else {
    yield put(Actions.addMusicFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
function* filterMusicSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(Actions.fetchList({ filter: keyword }));
  console.log(keyword);
}
function* deleteMusicSaga({ payload }) {
  yield put(showLoading());
  const { id } = payload;
  const resp = yield call(deleteMusic, id);
  const { status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(Actions.deleteMusicSuccess(id));
    yield put(hideModal());
  } else {
    yield put(Actions.deleteMusicFailed(id));
  }
  yield delay(1000);
  yield put(hideLoading());
}
function* rootSaga() {
  yield fork(watchFetchList);
  yield takeEvery(Types.ADD_MUSIC, addMusicSaga);
  yield takeEvery(Types.DELETE_MUSIC, deleteMusicSaga);
  yield takeLatest(Types.FILTER_MUSIC, filterMusicSaga);
}
export default rootSaga;
