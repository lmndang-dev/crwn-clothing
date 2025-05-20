import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categories.action";

import CATEGORIES_ACTION_TYPES from "./categories.types";

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categoryArray = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categoryArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
//};

export function* fetchCategoriesAsync() {
      try {
    const categoryArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoryArray))
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* catetgoriesSaga() {
    yield all([call(onFetchCategories)]);
}