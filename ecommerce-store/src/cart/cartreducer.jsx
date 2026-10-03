export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

export const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const existingitem = state.find((item) => item.id === action.payload.id);
             if(existingitem) {
                return state.map((item) => 
                    item.id === action.payload.id 
                    ? {...item, quantity: item.quantity + 1} 
                    : item
                );
            }
            return [...state, {...action.payload, quantity: 1}]

        }

           
        

        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload.id);


        case UPDATE_CART_ITEM_QUANTITY: 
            return state.map((item) => 
                item.id === action.payload.id 
                ? {...item, quantity: action.payload.quantity} 
                : item
            );

        
        

        case CLEAR_CART:
            return [];

        default:
            return state;


    }
}