import "./Cart.css";
import { useAuth, useCart } from "../../contexts";
import { HorizontalCard, Button } from "../../components";
import { useNavigate } from "react-router-dom";
export const CalculateTotal = (cart) => {
  const priceObj = {
    totalItems: 0,
    totalCostOfProduct: 0,
    totalDiscount: 0,
  };
  const { totalItems, totalCostOfProduct, totalDiscount } = cart.reduce(
    (acc, curr) => ({
      ...acc,
      totalItems: acc.totalItems + curr.qty,
      totalCostOfProduct: acc.totalCostOfProduct + curr.price * curr.qty,
      totalDiscount: acc.totalDiscount + curr.discount * curr.qty,
    }),
    priceObj
  );

  return { totalItems, totalCostOfProduct, totalDiscount };
};
export const Cart = () => {
  const { checkUserLogin } = useAuth();
  checkUserLogin();
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { cart } = cartState;

  const { totalItems, totalCostOfProduct, totalDiscount } =
    CalculateTotal(cart);

  const totalAmount =
    totalCostOfProduct > 0 ? totalCostOfProduct - totalDiscount + 399 : 0;

  const amountSaved = totalCostOfProduct + 199 - totalAmount;
  return (
    <>
      <h2 className="headline-2 text-center">My Cart ({cart.length}) </h2>
      <div className="mycart-container">
        {cart.length === 0 ? (
          <div className="empty-div text-center">
            <h2 className="headline-2">YOUR SHOPPING BAG IS EMPTY!</h2>
            <Button
              name={"Shop Now"}
              btnclass={"btn-secondary"}
              onClick={() => navigate("/products")}
            />
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
                  <p>&#8377;{totalCostOfProduct}</p>
                </li>
                <li>
                  <p>Discount</p>
                  <p>&#8377;{totalDiscount}</p>
                </li>
                <li>
                  <p>Delivery Charges</p>
                  <p>&#8377;399</p>
                </li>
                <li className="cart-item-total-amount">
                  <p className="small-text-3">Total Amount</p>
                  <p className="small-text-3">&#8377;{totalAmount}</p>
                </li>
              </ul>
              <p className="small-text-3 cart-item-footer-text">
                You will save &#8377;{amountSaved} on this order
              </p>
              <div className="cart-item-btns">
                <Button
                  btnclass={"btn-primary"}
                  name={"Checkout"}
                  onClick={() => navigate("/checkout")}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
