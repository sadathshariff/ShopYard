import "./Wishlist.css";
import { useAuth, useWishlist } from "../../contexts";
import { Button, WishlistCard } from "../../components";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const { checkUserLogin } = useAuth();
  checkUserLogin();
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  return (
    <>
      {wishlist.length === 0 ? (
        <div className="wishlist-center-div ">
          <h2 className="headline-2">Favourites</h2>
          <h4 className="headline-4">SAVE YOUR FAVOURITE ITEMS</h4>
          <p className="small-text-2">
            Want to save the items that you love? Just click on the heart symbol
            and it will show up here.
          </p>
          <Button
            name={"Browse"}
            btnclass={"btn-secondary"}
            onClick={() => navigate("/products")}
          />
        </div>
      ) : (
        <div className="wishlist-container">
          {wishlist.map((product) => (
            <WishlistCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};
