import { useFilter } from "../../../contexts";
import "./SideNav.css";
export const SideNav = () => {
  const { filterstate, filterdispatch } = useFilter();
  const { sortBy, showFastDelivery, rating, priceRange, category } =
    filterstate;

  return (
    <>
      <aside className="side-nav-container">
        <div className="side-nav side-nav-filter flex">
          <h3 className="headline-3">Filters</h3>
          <button
            className="btn btn-outline-secondary"
            onClick={() => filterdispatch({ type: "CLEAR_FILTERS" })}
          >
            Clear
          </button>
        </div>
        <div className="side-nav">
          <h3 className="headline-3">Price</h3>
          <ul className="list">
            <li>
              <label htmlFor="HighToLow">
                <input
                  type="radio"
                  id="HighToLow"
                  value="HIGH_TO_LOW"
                  name="SORT_BY_PRICE"
                  checked={sortBy === "HIGH_TO_LOW"}
                  onChange={(e) =>
                    filterdispatch({
                      type: "SORT_BY_PRICE",
                      payload: e.target.value,
                    })
                  }
                />
                High To Low
              </label>
            </li>
            <li>
              <label htmlFor="LowToHigh">
                <input
                  type="radio"
                  id="LowToHigh"
                  value="LOW_TO_HIGH"
                  name="SORT_BY_PRICE"
                  checked={sortBy === "LOW_TO_HIGH"}
                  onChange={(e) =>
                    filterdispatch({
                      type: "SORT_BY_PRICE",
                      payload: e.target.value,
                    })
                  }
                />
                Low To High
              </label>
            </li>
          </ul>
        </div>
        <div className="side-nav">
          <h3 className="headline-3">Shop By Category</h3>
          <ul className="list">
            <li>
              <label htmlFor="tshirts">
                <input
                  type="checkbox"
                  name="category"
                  id="tshirts"
                  value="tshirts"
                  onChange={(e) =>
                    filterdispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: e.target.value,
                    })
                  }
                  checked={category.includes("tshirts")}
                />
                T-Shirts
              </label>
            </li>
            <li>
              <label htmlFor="dresses">
                <input
                  type="checkbox"
                  name="category"
                  id="dresses"
                  value="dresses"
                  onChange={(e) =>
                    filterdispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: e.target.value,
                    })
                  }
                  checked={category.includes("dresses")}
                />
                Dresses
              </label>
            </li>
            <li>
              <label htmlFor="hoddies">
                <input
                  type="checkbox"
                  name="category"
                  id="hoddies"
                  value="hoddies"
                  checked={category.includes("hoddies")}
                  onChange={(e) =>
                    filterdispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: e.target.value,
                    })
                  }
                />
                Hoddies
              </label>
            </li>
            <li>
              <label htmlFor="shirts">
                <input
                  type="checkbox"
                  name="category"
                  id="shirts"
                  value="shirts"
                  checked={category.includes("shirts")}
                  onChange={(e) =>
                    filterdispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: e.target.value,
                    })
                  }
                />
                Shirts
              </label>
            </li>
          </ul>
        </div>
        <div className="side-nav">
          <h3 className="headline-3">Availability</h3>
          <ul className="list">
            <li>
              <label htmlFor="show_fast_delivery">
                <input
                  type="checkbox"
                  name="SHOW_FAST_DELIVERY"
                  id="show_fast_delivery"
                  value="SHOW_FAST_DELIVERY"
                  checked={showFastDelivery}
                  onChange={(e) =>
                    filterdispatch({
                      type: "SHOW_FAST_DELIVERY",
                      payload: e.target.checked,
                    })
                  }
                />
                Fast Delivery Only
              </label>
            </li>
          </ul>
        </div>
        <div className="side-nav">
          <h3 className="headline-3">Rating</h3>
          <ul className="list">
            <li>
              <label htmlFor="rating_4">
                <input
                  type="checkbox"
                  name="sort_by_rating_4"
                  value="4"
                  id="rating_4"
                  checked={rating == 4}
                  onChange={(e) =>
                    filterdispatch({
                      type: "SORT_BY_RATING",
                      payload: e.target.value,
                    })
                  }
                />
                4 star & Above
              </label>
            </li>
            <li>
              <label htmlFor="rating_3">
                <input
                  type="checkbox"
                  name="sort_by_rating_3"
                  value="3"
                  id="rating_3"
                  checked={rating == 3}
                  onChange={(e) =>
                    filterdispatch({
                      type: "SORT_BY_RATING",
                      payload: e.target.value,
                    })
                  }
                />
                3 star & Above
              </label>
            </li>
          </ul>
        </div>
        <div className="side-nav">
          <h3 className="headline-3">Price Range</h3>
          <p className="small-text-3">Price:{priceRange}</p>
          <label htmlFor="price_range">
            <input
              type="range"
              name="price_range"
              id="price_range"
              step={1000}
              min={1000}
              max={4000}
              className="price-range"
              value={priceRange}
              onChange={(e) =>
                filterdispatch({
                  type: "SORT_BY_PRICE_RANGE",
                  payload: e.target.value,
                })
              }
            />
            <datalist className="datalist-price-range">
              <option value="1000" label="1000" />
              <option value="2000" label="2000" />

              <option value="3000" label="3000" />
              <option value="4000" label="4000" />
            </datalist>
          </label>
        </div>
      </aside>
    </>
  );
};
