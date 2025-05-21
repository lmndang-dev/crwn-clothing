import { all, call } from "redux-saga/effects";
import { catetgoriesSaga } from "./categories/categories.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(catetgoriesSaga), call(userSagas)]);
}
