
const API_URL = "https://fakestoreapi.com/products";

export function getProducts() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export function getProductById(id) {
  return fetch(`${API_URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

