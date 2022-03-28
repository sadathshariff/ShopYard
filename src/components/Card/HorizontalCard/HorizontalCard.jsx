import "./HorizontalCard.css";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Button } from "../../index";
import { useCart } from "../../../contexts";
export const HorizontalCard = ({ product }) => {
  const { _id, name, img, description, price, qty } = product;
  const { cartDispatch, deleteFromCart, updateCartQty } = useCart();
  const token = localStorage.getItem("UserToken");

  const removeFromCart = async (id) => {
    try {
      const deletedItem = await deleteFromCart(id, token);
      if (deletedItem) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: deletedItem });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateProductQty = async (id, type) => {
    try {
      const updatedCartQty = await updateCartQty(id, type, token);
      if (updatedCartQty) {
        cartDispatch({ type: "UPDATE_QTY", payload: updatedCartQty });
      }
    } catch (error) {
      console.error(error);
    }
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
                removeFromCart(_id);
              }}
              className="icon-click"
            />
          ) : (
            <FaMinus
              onClick={() => {
                updateProductQty(_id, "decrement");
              }}
              className="icon-click"
            />
          )}
          <p className="small-text-2">{qty}</p>
          <FaPlus
            onClick={() => {
              updateProductQty(_id, "increment");
            }}
            className="icon-click"
          />
        </div>
        <div className="cart-item-btns">
          <Button btnclass={"btn-secondary"} name={"Move To Wishlist"} />
          <Button
            btnclass={"btn-danger"}
            name={"Remove From Cart"}
            onClick={() => removeFromCart(_id)}
          />
        </div>
      </div>
    </div>
  );
};
