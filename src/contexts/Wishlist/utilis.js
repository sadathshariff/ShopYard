import axios from "axios";
import { ShowToast } from "../../components";

export const postToWishlist = async (product) => {
  try {
    const res = await axios.post(
      `/api/user/wishlist`,
      { product },
      {
        headers: { authorization: localStorage.getItem("UserToken") },
      }
    );
    if (res.status === 201) {
      ShowToast("Added To Wishlist", "success");
      return res.data.wishlist;
    }
  } catch (error) {
    console.error(error);
    ShowToast("Failed to add,Please try again later", "error");
  }
};

export const deleteFromWishlist = async (productId) => {
  try {
    const res = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: localStorage.getItem("UserToken") },
    });
    if (res.status === 200) {
      ShowToast("Removed From Wishlist", "success");
      return res.data.wishlist;
    }
  } catch (error) {
    console.error(error);
    ShowToast("Failed to remove,Please try again later", "error");
  }
};
