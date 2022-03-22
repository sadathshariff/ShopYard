const SortByPrice = (state, data) => {
  switch (state.sortBy) {
    case "HIGH_TO_LOW":
      return [...data].sort((a, b) => b["price"] - a["price"]);
    case "LOW_TO_HIGH":
      return [...data].sort((a, b) => a["price"] - b["price"]);
    default:
      return data;
  }
};
const FastDelivery = (state, data) =>
  state.showFastDelivery
    ? data.filter((product) => product.fastDelivery)
    : data;

const SortByRating = (state, data) =>
  data.filter((product) => product.rating >= state.rating);

const SortByPriceRange = (state, data) =>
  data.filter((product) => product.price <= state.priceRange);

const FilterByCategory = (state, data) => {
  return state.category.length === 0
    ? data
    : data.filter((product) => state.category.includes(product.categoryName));
};

const Compose =
  (state, ...functions) =>
  (data) => {
    return functions.reduce((acc, curr) => {
      return curr(state, acc);
    }, data);
  };

export {
  SortByPrice,
  FastDelivery,
  SortByRating,
  SortByPriceRange,
  FilterByCategory,
  Compose,
};
