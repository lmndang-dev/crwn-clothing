import "./category.styles.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  //Get the category from the URL
  //The category will be used to get the products from the categoriesMap
  const { category } = useParams();

  //Get the categoriesMap from the CategoriesContext
  const categoriesMap = useSelector(selectCategoriesMap);

  //Get Loading
  const isLoading = useSelector(selectCategoriesIsLoading);

  //Set the products state
  const [products, setProducts] = useState(categoriesMap[category]);

  //Set the products based on the category
  //The products will be set when the category changes
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
