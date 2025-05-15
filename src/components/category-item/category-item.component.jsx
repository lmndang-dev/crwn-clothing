import "./category-item.styles.scss"

const CategoryItem = ({category}) => {

    //Destructured item from category object 
    // {
    //   id: 2,
    //   title: "jackets",
    //   imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    // },
    const {imageUrl, title} = category;

    //Return the container of one category item
    return (
        <div className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem;
