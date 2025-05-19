import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  //Destructured item from category object
  // {
  //   id: 2,
  //   title: "jackets",
  //   imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  // },
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  //Return the container of one category item

  const onNavigateHandler = () => {
    // This function is called when the DirectoryItem is clicked
    // It uses the useNavigate hook to navigate to the specified route
    navigate(route);
  };

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      {/* The onClick event handler is set to the DirectoryItemContainer */}
      {/* When clicked, it will call the onNavigateHandler function */}
      <BackgroundImage
        imageUrl={imageUrl}
        // The imageUrl prop is used to set the background image of the div
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
