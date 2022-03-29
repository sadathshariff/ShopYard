import "./HorizontalCard.css";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Button } from "../../index";
import { useCart, useWishlist } from "../../../contexts";
import { removeFromCart, updateProductQty } from "../../../utils/cart";
import { addToWishlist } from "../../../utils/wishlist";
export const HorizontalCard = ({ product }) => {
  const { _id, name, img, description, price, qty } = product;
  const { cartDispatch, deleteFromCart, updateCartQty } = useCart();
  const { postToWishlist, wishlistDispatch, wishlist } = useWishlist();
 
  const moveToWishlist = async (product) => {
    if (!wishlist.find((p) => p._id === product._id)) {
      addToWishlist(product, wishlistDispatch, postToWishlist);
    }
    removeFromCart(product._id, cartDispatch, deleteFromCart);
  };
  return (
    <div className="cart-item-card">
      <div className="cart-item-img">
        <img src={img} alt={name} />
      </div>
      <div className="cart-item-content">
        <h3 className="headline-3">Name: {name}</h3>
        <p className="small-text-2">Description:</p>
        <p className="small-text-2">{description}</p>
        <p className="small-text-3">Price: {price}</p>
        <div className="quantity-info">
          {qty === 1 ? (
            <FaTrash
              onClick={() => {
                removeFromCart(_id, cartDispatch, deleteFromCart);
              }}
              className="icon-click"
            />
          ) : (
            <FaMinus
              onClick={() => {
                updateProductQty(_id, "decrement", cartDispatch, updateCartQty);
              }}
              className="icon-click"
            />
          )}
          <p className="small-text-2">{qty}</p>
          <FaPlus
            onClick={() => {
              updateProductQty(_id, "increment", cartDispatch, updateCartQty);
            }}
            className="icon-click"
          />
        </div>
        <div className="cart-item-btns">
          <Button
            btnclass={"btn-secondary"}
            name={"Move To Wishlist"}
            onClick={() => moveToWishlist(product)}
          />
          <Button
            btnclass={"btn-danger"}
            name={"Remove From Cart"}
            onClick={() => removeFromCart(_id, cartDispatch, deleteFromCart)}
          />
        </div>
      </div>
    </div>
  );
};
