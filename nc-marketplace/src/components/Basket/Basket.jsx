import * as api from "../api";
import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Basket = () => {
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    if (loggedInUser !== null) {
      api.fetchBasket(loggedInUser.username).then((basketRes) => {
        return basketRes.data.items;
      });
    }
  }, [loggedInUser]);

  return (
    <section>
      {loggedInUser === null
        ? null
        : loggedInUser.basket.map((item) => {
            return (
              <ul>
                <li>{item.item_name}</li>
                <li>{item.price}</li>
              </ul>
            );
          })}
    </section>
  );
};

export default Basket;