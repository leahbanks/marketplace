import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Item = (item) => {
  const { loggedInUser } = useContext(UserContext);
  const { item_name, price, description, img_url, category_name, id } = item;
  
  const addToBasket = (loggedInUser) => {
    console.log(loggedInUser.basket)
    loggedInUser.basket.push(item)
  }

  return (
    <ul key={id} style={{ listStyle: "none" }}>
      <h3>{item_name}</h3>
      <li>Price: {price}</li>
      <li>Description: {description}</li>
      <li>Category: {category_name}</li>
      <img src={img_url}></img>
      {loggedInUser !== null ? (
        <button onClick={() => {addToBasket(loggedInUser)}}>
          Add to Basket
        </button>
      ) : (
        ""
      )}
    </ul>
  );
};

export default Item;