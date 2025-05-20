import {all , call} from "redux-saga/effects";
import { catetgoriesSaga } from "./categories/categories.saga";

export function* rootSaga(){
    yield all([call(catetgoriesSaga)]);
}