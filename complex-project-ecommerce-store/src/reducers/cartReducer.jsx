
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

export function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        const newState = [...state];
        newState[existingItemIndex] = {
          ...newState[existingItemIndex],
          quantity: newState[existingItemIndex].quantity + 1,
        };
        return newState;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case UPDATE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
}

