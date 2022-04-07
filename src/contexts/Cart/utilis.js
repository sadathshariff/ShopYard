import axios from "axios";
import { ShowToast } from "../../components";

export const postToCart = async (product, token) => {
  try {
    const res = await axios.post(
      `/api/user/cart`,
      { product },
      {
        headers: { authorization: localStorage.getItem("UserToken") },
      }
    );
    if (res.status === 201) {
      ShowToast("Product Added successfully!", "success");
      return res.data.cart;
    }
  } catch (error) {
    ShowToast("Failed to add product, Please try again later.", "error");
    console.error(error);
  }
};

export const deleteFromCart = async (productId, token) => {
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: localStorage.getItem("UserToken") },
    });
    if (res.status === 200) {
      ShowToast("Product removed successfully!", "success");
      return res.data.cart;
    }
  } catch (error) {
    ShowToast("Failed to remove product,Please try again later.", "error");
    console.error(error);
  }
};

export const updateCartQty = async (productId, type, token) => {
  try {
    const res = await axios.post(
      `/api/user/cart/${productId}`,
      { action: { type } },
      { headers: { authorization: localStorage.getItem("UserToken") } }
    );
    if (res.status === 200) {
      ShowToast("Quantity updated successfully!", "success");
      return res.data.cart;
    }
  } catch (err) {
    ShowToast("Failed to update quantity", "error");
    console.error(err);
  }
};
