import CATEGORIES_ACTION_TYPES from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";

//import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// export const setCategories = (categories) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categoryArray = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categoryArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// };
