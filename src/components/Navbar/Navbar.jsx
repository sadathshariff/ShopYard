import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../index";
import { useAuth } from "../../contexts";
export const Navbar = () => {
  const { loggedIn, logoutHandler } = useAuth();
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
            {/* Adding Buttons for now will add icons later */}
            <Link to="/cart">
              <Button btnclass={"btn-secondary"} name={"Cart"} />
            </Link>
            <Link to="/wishlist">
              <Button btnclass={"btn-secondary"} name={"WishList"} />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
