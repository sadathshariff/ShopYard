import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFilter, useCart, useAuth } from "../../../contexts";
import styles from "./ProductCard.module.css";
import { Button } from "../../index";
export const ProductCard = (props) => {
  const { _id, img, name, price, description, isLiked } = props;
  const { setShowProduct } = useFilter();
  const { loggedIn } = useAuth();
  const { cartDispatch, postToCart, cartState } = useCart();
  const { cart } = cartState;
  const token = localStorage.getItem("UserToken");
  const navigate = useNavigate();
  const addToCart = async (product) => {
    try {
      const newCart = await postToCart(product, token);
      if (newCart) {
        cartDispatch({ type: "ADD_TO_CART", payload: newCart });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.card} onClick={() => setShowProduct(props)}>
      <img src={img} alt={name} className="card-img" />
      <div className="card-close-icon">
        {isLiked ? <FaHeart color={"red"} /> : <FaRegHeart />}
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
          onClick={() => navigate("/cart")}
        />
      ) : (
        <Button
          btnclass={"btn-primary"}
          name={"ADD TO CART"}
          onClick={() => (loggedIn ? addToCart(props) : navigate("../login"))}
        />
      )}
    </div>
  );
};
