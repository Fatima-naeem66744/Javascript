
import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";

function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function Products() {
  // Phase 1: Product data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Phase 2: Catalog controls
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  // Debounced search
  const debouncedSearch = useDebounce(search, 300);

  // Fetch products
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    return [
      ...new Set(products.map((product) => product.category)),
    ];
  }, [products]);

  // Combined filtering + sorting
  const visibleProducts = useMemo(() => {
    let result = [...products];

    // 1. Search by title or description
    if (debouncedSearch.trim()) {
      const query = debouncedSearch.toLowerCase().trim();

      result = result.filter((product) =>
        `${product.title} ${product.description}`
          .toLowerCase()
          .includes(query)
      );
    }

    // 2. Category filter
    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // 3. Minimum price
    if (minPrice !== "") {
      result = result.filter(
        (product) => product.price >= Number(minPrice)
      );
    }

    // 4. Maximum price
    if (maxPrice !== "") {
      result = result.filter(
        (product) => product.price <= Number(maxPrice)
      );
    }

    // 5. Sorting
    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return result;
  }, [
    products,
    debouncedSearch,
    category,
    minPrice,
    maxPrice,
    sort,
  ]);

  // Loading state
  if (loading) {
    return <p>Loading products...</p>;
  }

  // Error state
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Products
      </h1>

      {/* Catalog Controls */}
      <div className="mb-8 grid gap-4 rounded-lg border p-4 md:grid-cols-2 lg:grid-cols-5">

        {/* Search */}
        <div>
          <label
            htmlFor="search"
            className="mb-1 block font-medium"
          >
            Search
          </label>

          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded border px-3 py-2"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-1 block font-medium"
          >
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded border px-3 py-2"
          >
            <option value="all">All Categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Minimum Price */}
        <div>
          <label
            htmlFor="minPrice"
            className="mb-1 block font-medium"
          >
            Min Price
          </label>

          <input
            id="minPrice"
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min price"
            className="w-full rounded border px-3 py-2"
          />
        </div>

        {/* Maximum Price */}
        <div>
          <label
            htmlFor="maxPrice"
            className="mb-1 block font-medium"
          >
            Max Price
          </label>

          <input
            id="maxPrice"
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max price"
            className="w-full rounded border px-3 py-2"
          />
        </div>

        {/* Sort */}
        <div>
          <label
            htmlFor="sort"
            className="mb-1 block font-medium"
          >
            Sort
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded border px-3 py-2"
          >
            <option value="">Default</option>
            <option value="price-low">
              Price: Low → High
            </option>
            <option value="price-high">
              Price: High → Low
            </option>
            <option value="rating">
              Rating: Highest
            </option>
          </select>
        </div>
      </div>

      {/* Result count */}
      <p className="mb-4 text-gray-600">
        Showing {visibleProducts.length} of {products.length} products
      </p>

      {/* Products */}
      {visibleProducts.length === 0 ? (
        <p>No products match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}

