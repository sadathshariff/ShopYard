export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      return { ...state, cart: action.payload };
    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload };
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "UPDATE_QTY":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
