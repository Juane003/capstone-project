import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category, image, route }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={image}></BackgroundImage>
      <BodyContainer>
        <h2>{category}</h2>
        <p>SHOP NOW</p>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
