import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFilter, useCart, useAuth, useWishlist } from "../../../contexts";
import styles from "./ProductCard.module.css";
import { Button } from "../../index";
import { addToCart } from "../../../utils/cart";
import { addToWishlist, removeFromWishlist } from "../../../utils/wishlist";
export const ProductCard = (props) => {
  const { _id, img, name, price, description } = props;
  const { setShowProduct } = useFilter();
  const { loggedIn } = useAuth();
  const { cartDispatch, postToCart, cartState } = useCart();
  const { cart } = cartState;
  const { wishlistDispatch, postToWishlist, wishlist, deleteFromWishlist } =
    useWishlist();
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => setShowProduct(props)}>
      <img src={img} alt={name} className="card-img" />
      <div className="card-close-icon">
        {wishlist.find((item) => item._id === _id) ? (
          <FaHeart
            color={"red"}
            onClick={() =>
              loggedIn
                ? removeFromWishlist(_id, wishlistDispatch, deleteFromWishlist)
                : navigate("../login", { replace: true })
            }
          />
        ) : (
          <FaRegHeart
            onClick={() =>
              loggedIn
                ? addToWishlist(props, wishlistDispatch, postToWishlist)
                : navigate("../login", { replace: true })
            }
          />
        )}
      </div>
      <Link to="/productDetails">
        <div className="card-header">
          <h3 className="headline-3">{name}</h3>
          <p className="small-text-2">Rs.{price}</p>
          <p className="small-text-3">{description}</p>
        </div>
      </Link>
      {cart.find((item) => item._id === _id) ? (
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
              ? addToCart(props, cartDispatch, postToCart)
              : navigate("../login", { replace: true })
          }
        />
      )}
    </div>
  );
};
