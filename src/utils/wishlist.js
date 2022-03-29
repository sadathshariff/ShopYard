const token = localStorage.getItem("UserToken");
export const addToWishlist = async (
  product,
  wishlistDispatch,
  postToWishlist
) => {
  try {
    const newWishlist = await postToWishlist(product, token);
    if (newWishlist) {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: newWishlist });
    }
  } catch (error) {
    console.error(error);
  }
};
export const removeFromWishlist = async (
  productId,
  wishlistDispatch,
  deleteFromWishlist
) => {
  try {
    const newWishlist = await deleteFromWishlist(productId, token);
    if (newWishlist) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: newWishlist,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
