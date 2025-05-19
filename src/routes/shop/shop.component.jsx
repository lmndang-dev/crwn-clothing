import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";

import CategoriesPreview from "../categories-preview/categories-preview.component";

import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();
  //Load the categories when the page load
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryArray));
    };

    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
