import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFilter, useCart, useWishlist } from "../../../contexts";
import { Button } from "../../index";
import { addToCart, updateProductQty } from "../../../utils/cart";
import { addToWishlist, removeFromWishlist } from "../../../utils/wishlist";
export const WishlistCard = ({ product }) => {
  const { setShowProduct } = useFilter();
  const { cartDispatch, postToCart, cartState, updateCartQty } = useCart();
  const { cart } = cartState;
  const { wishlistDispatch, postToWishlist, wishlist, deleteFromWishlist } =
    useWishlist();

  const moveToCartFromWishlist = (product) => {
    if (cart.find((p) => p._id === product._id)) {
      updateProductQty(product._id, "increment", cartDispatch, updateCartQty);
    } else {
      addToCart(product, cartDispatch, postToCart);
    }
    removeFromWishlist(product._id, wishlistDispatch, deleteFromWishlist);
  };
  return (
    <>
      <div className="card" onClick={() => setShowProduct(product)}>
        <img src={product.img} alt={product.name} className="card-img" />
        <div className="card-close-icon">
          {wishlist.find((item) => item._id === product._id) ? (
            <FaHeart
              color={"red"}
              onClick={() =>
                removeFromWishlist(
                  product._id,
                  wishlistDispatch,
                  deleteFromWishlist
                )
              }
            />
          ) : (
            <FaRegHeart
              onClick={() =>
                addToWishlist(product, wishlistDispatch, postToWishlist)
              }
            />
          )}
        </div>
        <Link to="/productDetails">
          <div className="card-header">
            <h3 className="headline-3">{product.name}</h3>
            <p className="small-text-2">Rs.{product.price}</p>
            <p className="small-text-3">{product.description}</p>
          </div>
        </Link>
        <Button
          btnclass={"btn-success"}
          name={"Move To Cart"}
          onClick={() => moveToCartFromWishlist(product)}
        />
      </div>
    </>
  );
};
