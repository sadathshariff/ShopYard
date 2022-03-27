import { Link } from "react-router-dom";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import "./Navbar.css";
import { Button } from "../index";
import { useAuth, useCart } from "../../contexts";
export const Navbar = () => {
  const { loggedIn, logoutHandler } = useAuth();
  const { cartState } = useCart();
  return (
    <>
      <header className="header navbar-container">
        <Link to="/">
          <h2 className="heading-2">ShopYard</h2>
        </Link>
        <div className="input-search-div">
          <input
            type="text"
            name="search"
            className="input-search"
            placeholder="Search Products"
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
                {/* <span className="badge-number"></span> */}
              </div>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
