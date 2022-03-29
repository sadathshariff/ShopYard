import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "./reducer";
import { useAuth } from "../index";
import axios from "axios";
import { postToWishlist, deleteFromWishlist } from "./utilis";
const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  const { loggedIn } = useAuth();
  const token = localStorage.getItem("UserToken");
  const getWishlist = async (wishlistDispatch) => {
    try {
      const res = await axios.get("/api/user/wishlist", {
        headers: { authorization: token },
      });
      if (res.status === 200) {
        wishlistDispatch({ type: "SET_WISHLIST", payload: res.data.wishlist });
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (loggedIn) {
      getWishlist(wishlistDispatch);
    }
  }, [loggedIn]);
  return (
    <WishlistContext.Provider
      value={{
        wishlist: wishlistState.wishlist,
        wishlistDispatch,
        postToWishlist,
        deleteFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
