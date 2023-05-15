import { useState, useEffect } from "react";
import * as api from "../api";
import Item from './Item'


export default function Items() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    Promise.all([api.fetchItems(), api.fetchCategories()]).then(
      ([itemsRes, categoriesRes]) => {
        setItems(itemsRes.data.items);
        setCategories(categoriesRes.data.categories);
      }
    );
  }, []);

  function handleCategories(event){
    let category = event.target.value;
    api.fetchItems(category).then((response) => {
      setItems(response.data.items)
    })
}

  return (
    <section>
      <h2>Select Category</h2>
      <select onChange={handleCategories}
      name="categories">
        <option>All</option>
        {categories.map((category, id) => (
          <option key={id}>{category.category_name}</option>
        ))}
      </select>
      <div className="items-container">
        <ul className="item-list" >
          {items.map((item, id) => (
              <Item {...item} key={id}/>
          ))}
        </ul>
      </div>
    </section>
  );
}