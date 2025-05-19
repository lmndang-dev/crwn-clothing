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
  const { imageUrl, title } = category;

  //Return the container of one category item
  return (
    <DirectoryItemContainer>
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
