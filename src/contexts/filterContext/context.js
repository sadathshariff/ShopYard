import { useContext, useReducer, useEffect, createContext } from "react";
import { reducerFunction } from "./reducer";
import {
  FastDelivery,
  SortByPrice,
  SortByRating,
  Compose,
  SortByPriceRange,
  FilterByCategory,
} from "./utilis";
import { UseAxios } from "../../hooks";
const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const initialState = {
    sortBy: "",
    showFastDelivery: false,
    rating: 1,
    priceRange: 4000,
    category: [],
  };
  const { response, loading, error } = UseAxios("/api/products");
  const data = response.products || [];

  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const filteredProducts = Compose(
    state,
    SortByPrice,
    FastDelivery,
    SortByRating,
    SortByPriceRange,
    FilterByCategory
  )(data);

  return (
    <FilterContext.Provider
      value={{ state, dispatch, products: filteredProducts, loading, error }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
