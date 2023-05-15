import * as api from "../api";
import {useState, useEffect} from 'react';

const ListItem = () => {
  const [categories, setCategories] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const itemToPost = {
      item_name: e.target.item_name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      category_name: e.target.category.value,
      img_url: e.target.image.value,
    };
    api
      .postItem(itemToPost)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api.fetchCategories().then((categoriesRes) => {
      setCategories(categoriesRes.data.categories);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item_name">Item Name</label>
      <input type="text" id="item_name"></input>
      <label htmlFor="description">Item Description</label>
      <input type="text" id="description"></input>
      <label htmlFor="price">Item Price</label>
      <input type="number" id="price"></input>
      <label htmlFor="category">
        Item Category
        <select name="category">
          {categories.map((category, id) => (
            <option key={id}>{category.category_name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="image">Item Image URL</label>
      <input type="text" id="image"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ListItem;