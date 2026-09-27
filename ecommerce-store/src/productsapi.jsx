const api = "https://fakestoreapi.com/products";
export default function getProducts() {
  return fetch(api)
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
  return fetch(`${api}/${id}`)
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

     
