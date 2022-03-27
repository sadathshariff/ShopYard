import axios from "axios";

export const postToCart = async (product, token) => {
  try {
    const res = await axios.post(
      `/api/user/cart`,
      { product },
      {
        headers: { authorization: token },
      }
    );
    if (res.status === 201) {
      return res.data.cart;
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteFromCart = async (productId, token) => {
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token },
    });
    if (res.status === 200) {
      return res.data.cart;
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateCartQty = async (productId, type, token) => {
  try {
    const res = await axios.post(
      `/api/user/cart/${productId}`,
      { action: { type } },
      { headers: { authorization: token } }
    );
    if (res.status === 200) {
      return res.data.cart;
    }
  } catch (err) {
    console.error(err);
  }
};
