import "./ProductDetail.css";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/filterContext/context";
import { useAuth } from "../../contexts/Auth/context";
import { useCart } from "../../contexts/Cart/context";
import { useWishlist } from "../../contexts";
import { Button } from "../index";
import { addToCart } from "../../utils/cart";
import { addToWishlist } from "../../utils/wishlist";

export const ProductDetail = () => {
  const { showProduct } = useFilter();
  const {
    _id,
    name,
    img,
    price,
    categoryName,
    description,
    fastDelivery,
    rating,
  } = showProduct;
  const { loggedIn } = useAuth();
  const { cartDispatch, postToCart, cartState } = useCart();
  const { cart } = cartState;
  const { wishlist, wishlistDispatch, postToWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <div>
      <div className="back-nav-div">
        <Link to="/products">
          <p className="small-text-2">Products</p>
        </Link>
      </div>
      <div className="product-container flex-center">
        <div className="product-details">
          <div className="product-details-img">
            <img src={img} alt={name} className="resp-img" />
          </div>
          <div className="product-details-div">
            <h2 className="headline-2">Name: {name}</h2>
            <h3 className="headline-3">Price: Rs.{price}</h3>
            <p className="small-text-2">Description: {description}</p>
            <div>
              <p className="small-text-2">Category:{categoryName}</p>
              <p className="small-text-2">Ratings: {rating}</p>
              <p className="small-text-2">
                Fast Delivery: {fastDelivery ? "Available" : " Min 3 Days"}
              </p>
            </div>
            <div className="product-details-btns">
              {wishlist.find((item) => item._id === _id) ? (
                <Button
                  btnclass={"btn-success"}
                  name={"Go To Wishlist"}
                  onClick={() => navigate("/wishlist")}
                />
              ) : (
                <Button
                  btnclass={"btn-outline-primary"}
                  name={"Save to Wishlist"}
                  onClick={() =>
                    loggedIn
                      ? addToWishlist(
                          showProduct,
                          wishlistDispatch,
                          postToWishlist
                        )
                      : navigate("../login")
                  }
                />
              )}

              {cart.find((item) => item._id === _id) ? (
                <Button
                  btnclass={"btn-success"}
                  name={"Go To Cart"}
                  onClick={() => navigate("/cart")}
                />
              ) : (
                <Button
                  btnclass={"btn-primary"}
                  name={"ADD TO CART"}
                  onClick={() =>
                    loggedIn
                      ? addToCart(showProduct, cartDispatch, postToCart)
                      : navigate("../login")
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
