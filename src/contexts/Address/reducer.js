export const addressReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ADDRESS":
    case "SET_ADDRESS":
    case "DELETE_ADDRESS":
    case "UPDATE_ADDRESS":
      return { ...state, addresses: payload };
    default:
      return { ...state };
  }
};
