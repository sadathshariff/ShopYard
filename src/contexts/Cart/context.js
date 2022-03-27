import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "./reducer";
import { useAuth } from "../index";
import axios from "axios";
import { postToCart, deleteFromCart, updateCartQty } from "./utilis";
const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
  const { loggedIn } = useAuth();
  const token = localStorage.getItem("UserToken");
  const getCart = async (cartDispatch) => {
    try {
      const res = await axios.get("/api/user/cart", {
        headers: { authorization: token },
      });
      if (res.status === 200) {
        cartDispatch({ type: "SET_CART", payload: res.data.cart });
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (loggedIn) {
      getCart(cartDispatch);
    }
  }, [loggedIn]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        postToCart,
        deleteFromCart,
        updateCartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
