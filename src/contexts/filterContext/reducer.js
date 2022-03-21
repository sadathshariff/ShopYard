export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sortBy: action.payload };
    case "SHOW_FAST_DELIVERY":
      return { ...state, showFastDelivery: action.payload };
    case "SORT_BY_RATING":
      return { ...state, rating: action.payload };
    case "SORT_BY_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "FILTER_BY_CATEGORY":
      const newCategory = state.category.includes(action.payload)
        ? state.category.filter((p) => p !== action.payload)
        : [...state.category, action.payload];
      console.log(newCategory);
      return { ...state, category: newCategory };

    case "CLEAR_FILTERS":
      return {
        sortBy: "",
        showFastDelivery: false,
        rating: 1,
        priceRange: 4000,
        category: [],
      };
    default:
      return state;
  }
};
