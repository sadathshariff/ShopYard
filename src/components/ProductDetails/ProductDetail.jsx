import "./ProductDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFilter } from "../../contexts/filterContext/context";
import { useAuth } from "../../contexts/Auth/context";
import { useCart } from "../../contexts/Cart/context";
import { useWishlist } from "../../contexts";
import { Button } from "../index";
import { addToCart } from "../../utils/cart";
import { addToWishlist } from "../../utils/wishlist";

export const ProductDetail = () => {
  const { products } = useFilter();
  const { id } = useParams();
  const details = products?.find((item) => item.id == id);
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
            <img src={details?.img} alt={name} className="resp-img" />
          </div>
          <div className="product-details-div">
            <h2 className="headline-2">Name: {details?.name}</h2>
            <h3 className="headline-3">Price: Rs.{details?.price}</h3>
            <p className="small-text-2">Description: {details?.description}</p>
            <div>
              <p className="small-text-2">Category:{details?.categoryName}</p>
              <p className="small-text-2">Ratings: {details?.rating}</p>
              <p className="small-text-2">
                Fast Delivery: {details?.fastDelivery ? "Available" : " Min 3 Days"}
              </p>
            </div>
            <div className="product-details-btns">
              {wishlist.find((item) => item._id === details?._id) ? (
                <Button
                  btnclass={"btn-success"}
                  name={"Go To Wishlist"}
                  onClick={() => navigate("/wishlist", { replace: true })}
                />
              ) : (
                <Button
                  btnclass={"btn-outline-primary"}
                  name={"Save to Wishlist"}
                  onClick={() =>
                    loggedIn
                      ? addToWishlist(
                          details,
                          wishlistDispatch,
                          postToWishlist
                        )
                      : navigate("../login", { replace: true })
                  }
                />
              )}

              {cart.find((item) => item._id === details?._id) ? (
                <Button
                  btnclass={"btn-success"}
                  name={"Go To Cart"}
                  onClick={() => navigate("/cart", { replace: true })}
                />
              ) : (
                <Button
                  btnclass={"btn-primary"}
                  name={"ADD TO CART"}
                  onClick={() =>
                    loggedIn
                      ? addToCart(details, cartDispatch, postToCart)
                      : navigate("../login", { replace: true })
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
