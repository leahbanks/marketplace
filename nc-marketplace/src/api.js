import axios from "axios";

export const api = axios.create({
  baseURL: "https://nc-marketplace.herokuapp.com/api",
});

export const fetchCategories = () => {
  return api.get("/categories");
};

export const fetchItems = (category) => {
  if (!category || category === 'All') {
    return api.get(`/items?category_name`)
  } else {
    return api.get(`/items?category_name=${category}`);
  }
};

export const postItem = (item) => {
  return api.post("/items", item).then(({res}) => {
    return res;
  })
}

export const postUser = (user) => {
  return api.post("/users", user).then(({res}) => {
    return res;
  })
}

export const fetchUsers = () => {
  return api.get("/users");
};

export const patchUser = (username, updatedBody) => {
  return api.patch(`users/${username}`, updatedBody)
}

export const postBasket = (username) => {
  return api.post(`users/${username}/basket`, username).then(({res}) => {
    return res;
  })
}

export const fetchBasket = (username) => {
  return api.get(`users/${username}/basket`)
}