export const addToWishlist = async (
  product,
  wishlistDispatch,
  postToWishlist
) => {
  try {
    const newWishlist = await postToWishlist(product);
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
    const newWishlist = await deleteFromWishlist(productId);
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
