import "./Checkout.css";
import { useAddress, useCart } from "../../contexts";
import { Button, ShowToast, AddressModal } from "../../components";
import { CalculateTotal } from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const {
    addressState,
    DeleteAddress,
    addressDispatch,
    setShowForm,
    setNewAddress,
    setIsEdit,
  } = useAddress();
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const navigate = useNavigate();

  const handleDelete = (a) => {
    DeleteAddress(a, addressDispatch);
  };

  const handleEdit = (a) => {
    setShowForm(true);
    setIsEdit(true);
    setNewAddress(a);
  };
  const { totalItems, totalCostOfProduct, totalDiscount } =
    CalculateTotal(cart);

  const totalAmount =
    totalCostOfProduct > 0 ? totalCostOfProduct - totalDiscount + 399 : 0;
  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };
  const showRazarpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      ShowToast(
        "Razarpay Payment failed to load,check your connection",
        "error"
      );
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: "INR",
      name: "ShopYard",
      description: "Thankyou for shopping",
      amount: totalAmount * 100,
      image:
        "https://res.cloudinary.com/sadath/image/upload/v1654675767/shopping_ptp3xe.svg",

      handler: function (response) {
        if (response.razorpay_payment_id) {
          ShowToast("Payment successful", "success");
          cartDispatch({ type: "REMOVE_FROM_CART", payload: [] });
        }
      },

      prefill: {
        name: "Shopyard",
        email: "shopyard@dev.com",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="checkout-container">
      <h2 className="text-center">Checkout</h2>
      <div className="grid  grid-gap-1 checkout-div">
        <div>
          <div className="address-list">
            <h3>Select your Delivery Point</h3>
            <AddressModal />
            {addressState?.addresses?.map((a) => (
              <div key={a._id} className="address-box flex jutify-sb ">
                <label className="address-label">
                  <input type="radio" name="address" />
                </label>
                <div className="address-details">
                  <h3 className="heading-3">{a.name}</h3>
                  <p className="small-text-3">{a.number}</p>
                  <p className="small-text-3">
                    {a.street} - {a.city}
                  </p>
                  <p className="small-text-3">
                    {a.state},{a.country}
                  </p>
                  <p className="small-text-3">{a.pincode}</p>
                </div>
                <div className="flex flex-column justify-space-around">
                  <Button
                    name={"Edit"}
                    btnclass={"btn-secondary"}
                    onClick={() => handleEdit(a)}
                  />
                  <Button
                    name={"Delete"}
                    btnclass={"btn-danger"}
                    onClick={() => handleDelete(a)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid-item">
          <h2 className="text-center">Order Summary</h2>
          {cart.length === 0 ? (
            <div className="flex-center flex-column">
              <p className="small-text-2  text-center">
                Nothing in the Orders,Let's Start Shopping!!
              </p>
              <Button
                name={"Shop Now"}
                btnclass={"btn-secondary"}
                onClick={() => navigate("/products")}
              />
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item._id} className="flex flex-wrap justify-sb m-1">
                  <p className="small-text-3">
                    {item.name} - ({item.price} x {item.qty})
                  </p>
                  <p className="small-text-3">&#8377;{item.price * item.qty}</p>
                </div>
              ))}
              <h3 className="text-center">Price Summary</h3>

              <div className="flex flex-wrap flex-center">
                <ul className="list stackedlist">
                  <li>
                    <p className="small-text-3">TotalPrice: </p>
                    <p>&#8377;{totalCostOfProduct}</p>
                  </li>

                  <li>
                    <p className="small-text-3">TotalDiscount: </p>
                    <p>&#8377;{totalDiscount}</p>
                  </li>

                  <li>
                    <p className="small-text-3">Delivery Charges: </p>
                    <p>&#8377;399</p>
                  </li>
                  <li>
                    <p className="small-text-3">TOTAL: </p>
                    <p>&#8377;{totalAmount}</p>
                  </li>
                </ul>
              </div>
              <div className="flex-center cart-item-btns">
                <Button
                  name={"Place Order"}
                  btnclass={"btn-primary"}
                  onClick={showRazarpay}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
