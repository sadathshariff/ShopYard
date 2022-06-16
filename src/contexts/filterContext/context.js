import {
  useContext,
  useState,
  useReducer,
  createContext,
  useEffect,
} from "react";
import { filterReducer } from "./reducer";
import {
  FastDelivery,
  SortByPrice,
  SortByRating,
  Compose,
  SortByPriceRange,
  FilterByCategory,
  FilterBySearch,
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
    search: "",
  };
  const [data, setData] = useState([]);
  const { response, loading, error } = UseAxios("/api/products");

  useEffect(() => {
    setData(response.products || []);
  }, [response]);

  const [filterstate, filterdispatch] = useReducer(filterReducer, initialState);
  const filteredProducts = Compose(
    filterstate,
    SortByPrice,
    FastDelivery,
    SortByRating,
    SortByPriceRange,
    FilterByCategory,
    FilterBySearch
  )(data);

  return (
    <FilterContext.Provider
      value={{
        filterstate,
        filterdispatch,
        products: filteredProducts,
        loading,
        error,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
