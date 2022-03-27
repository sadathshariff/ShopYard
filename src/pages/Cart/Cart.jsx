import "./Cart.css";
import { useAuth, useCart } from "../../contexts";
import { HorizontalCard, Button } from "../../components";
export const Cart = () => {
  const { checkUserLogin } = useAuth();
  checkUserLogin();
  const { cartState } = useCart();
  const { cart } = cartState;

  const totalItems = cart.reduce((acc, curr) => {
    acc = acc + curr.qty;
    return acc;
  }, 0);

  const totalCostOfProduct = cart.reduce((acc, curr) => {
    acc = acc + curr.price * curr.qty;
    return acc;
  }, 0);

  const totalDiscount = cart.reduce((acc, curr) => {
    acc = acc + curr.discount * curr.qty;
    return acc;
  }, 0);

  const totalAmount =
    totalCostOfProduct > 0 ? totalCostOfProduct - totalDiscount + 199 : 0;

  const amountSaved = totalCostOfProduct + 199 - totalAmount;
  return (
    <>
      <h2 className="headline-2 text-center">My Cart ({cart.length}) </h2>
      <div className="mycart-container">
        {cart.length === 0 ? (
          <div className="empty-div text-center">
            <h2 className="headline-2">YOUR SHOPPING BAG IS EMPTY!</h2>
          </div>
        ) : (
          <>
            <div className="cart">
              {cart.map((product) => (
                <HorizontalCard key={product.id} product={product} />
              ))}
            </div>
            <div className="cart-checkout-item">
              <ul className="list stackedList">
                <h3 className="list-label">Price Details</h3>
                <li>
                  <p>Price({totalItems} items)</p>
                  <p>₹{totalCostOfProduct}</p>
                </li>
                <li>
                  <p>Discount</p>
                  <p>₹{totalDiscount}</p>
                </li>
                <li>
                  <p>Delivery Charges</p>
                  <p>₹199</p>
                </li>
                <li className="cart-item-total-amount">
                  <p className="small-text-3">Total Amount</p>
                  <p className="small-text-3">₹{totalAmount}</p>
                </li>
              </ul>
              <p className="small-text-3 cart-item-footer-text">
                You will save ₹{amountSaved} on this order
              </p>
              <div className="cart-item-btns">
                <Button btnclass={"btn-primary"} name={"Checkout"} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
