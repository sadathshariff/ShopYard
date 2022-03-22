import { useContext, useState, useReducer, createContext } from "react";
import { filterReducer } from "./reducer";
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

  const [showProduct, setShowProduct] = useState({});
  const [filterstate, filterdispatch] = useReducer(filterReducer, initialState);
  const filteredProducts = Compose(
    filterstate,
    SortByPrice,
    FastDelivery,
    SortByRating,
    SortByPriceRange,
    FilterByCategory
  )(data);

  return (
    <FilterContext.Provider
      value={{
        filterstate,
        filterdispatch,
        products: filteredProducts,
        loading,
        error,
        showProduct,
        setShowProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
