const api = "https://dummyjson.com/products";

function normalize(product) {
  return {
    ...product,
    image: product.thumbnail,
    rating: { rate: product.rating, count: product.reviews?.length ?? 0 },
  };
}

export default function getProducts() {
  return fetch(`${api}?limit=0`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    })
    .then((data) => {
      return data.products.map(normalize);
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
      return normalize(data);
    })
    .catch((error) => {
      throw error;
    });
}

     
