# jam recording
[Phase 1 – Architecture, Product Catalog & Routing – Proof of Completion](https://jam.dev/c/8236d76a-2ce1-4290-a123-3e48e7025487)

## Phase: Product Catalog + Detail Pages + Cart Reducer Skeleton

Added the foundation for the e-commerce product catalog. Products are now fetched from the Fake Store API and displayed in a responsive grid with loading and error states. Each product can be opened through a dynamic React Router route (`/products/:id`) to view its image, title, price, description, category, rating, and review count, with navigation handled using React Router links without full-page reloads. The project structure was organized into separate `api`, `components`, `pages`, `context`, and `reducers` folders. A cart state architecture was also scaffolded using `CartContext`, `CartProvider`, and `useReducer`, with the required action types defined: `ADD_TO_CART`, `REMOVE_FROM_CART`, `UPDATE_QUANTITY`, and `CLEAR_CART`. The cart UI and dispatch logic are intentionally left for the next phase.


# phase 2 jam recording
[ "Phase 2 – Filtering, Sorting & Search – Proof of Completion](https://jam.dev/c/2167f573-721c-4b64-a583-c12a5db3c011)
## Phase 2 — Filtering, Sorting & Search

In Phase 2, the product catalog was enhanced with interactive filtering, sorting, and search functionality. A controlled category dropdown allows users to filter products by category, while minimum and maximum price inputs provide a price-range filter. A sort control supports sorting by price from low to high, price from high to low, and highest rating. A debounced search input with a 300ms delay searches product titles and descriptions without requiring a submit button. All controls are combinable at the same time, and the resulting product list is calculated with `useMemo` to efficiently derive the filtered and sorted products. A visible result count shows how many products match the current controls, an empty state is displayed when no products match, and clearing the active filters restores the full catalog.

