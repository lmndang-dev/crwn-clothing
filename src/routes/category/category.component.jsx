import "./category.styles.scss";

import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  //Get the category from the URL
  //The category will be used to get the products from the categoriesMap
  const { category } = useParams();

  //Get the categoriesMap from the CategoriesContext
  const { categoriesMap } = useContext(CategoriesContext);

  //Set the products state
  const [products, setProducts] = useState(categoriesMap[category]);

  //Set the products based on the category
  //The products will be set when the category changes
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
