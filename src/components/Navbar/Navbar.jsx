import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import "./Navbar.css";
import { Button } from "../index";
import { useAuth, useCart, useFilter, useWishlist } from "../../contexts";
export const Navbar = () => {
  const { loggedIn, logoutHandler } = useAuth();
  const [input, setInput] = useState("");
  const { cartState } = useCart();
  const { wishlist } = useWishlist();
  const { filterdispatch, products } = useFilter();

  const debounce = (cb, delay = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(args);
      }, delay);
    };
  };

  const debounceText = debounce((text) => setInput(text));
  const filteredProducts = products.filter((item) => {
    return Object.values(item.name).join("").toLowerCase().includes(input);
  });
  const handleChange = (e) => {
    debounceText(e.target.value);
  };

  console.log(filteredProducts);
  return (
    <>
      <header className="header navbar-container">
        <Link to="/">
          <h2
            className="heading-2"
            onClick={() => filterdispatch({ type: "CLEAR_FILTERS" })}
          >
            ShopYard
          </h2>
        </Link>

        <div className="input-search-div">
          <input
            type="text"
            name="search"
            className="input-search"
            placeholder="Search Products"
            value={input}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <nav>
          <div className="nav-items flex">
            {loggedIn ? (
              <Button
                btnclass={"btn-secondary"}
                name={"Logout"}
                onClick={logoutHandler}
              />
            ) : (
              <Link to="/login">
                <Button btnclass={"btn-secondary"} name={"Login"} />
              </Link>
            )}
            <Link to="/cart">
              <div className="badge-div">
                <FaShoppingBag size={30} />
                {cartState.cart.length > 0 ? (
                  <span className="badge-number">{cartState.cart.length}</span>
                ) : (
                  ""
                )}
              </div>
            </Link>
            <Link to="/wishlist">
              <div className="badge-div">
                <FaHeart size={30} />
                {wishlist.length > 0 ? (
                  <span className="badge-number">{wishlist.length}</span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
