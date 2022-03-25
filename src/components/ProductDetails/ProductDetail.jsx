import "./ProductDetail.css";
import { Link, useNavigate } from "react-router-dom";
import { MdNavigateBefore } from "react-icons/md";
import { useFilter } from "../../contexts/filterContext/context";
import { useAuth } from "../../contexts/Auth/context";
export const ProductDetail = () => {
  const { showProduct } = useFilter();
  const navigate = useNavigate();
  const { name, img, price, categoryName, description, fastDelivery, rating } =
    showProduct;
  const { checkUserLogin, loggedIn } = useAuth();
  const addToCart = () => {
    if (loggedIn) {
      console.log("added to cart");
    } else {
      navigate("../login");
    }
  };
  return (
    <div>
      <div className="back-nav-div">
        <Link to="/products">
          <MdNavigateBefore size={30} />
          <p className="small-text-2">Products</p>
        </Link>
      </div>
      <div className="product-container flex-center">
        <div className="product-details">
          <div className="product-details-img">
            <img src={img} alt={name} className="resp-img" />
          </div>
          <div className="product-details-div">
            <h2 className="headline-2">Name: {name}</h2>
            <h3 className="headline-3">Price: Rs.{price}</h3>
            <p className="small-text-2">Description: {description}</p>
            <div>
              <p className="small-text-2">Category:{categoryName}</p>
              <p className="small-text-2">Ratings: {rating}</p>
              <p className="small-text-2">
                Fast Delivery: {fastDelivery ? "Available" : " Min 3 Days"}
              </p>
            </div>
            <div className="product-details-btns">
              <button className="btn btn-outline-primary">
                Save to Wishlist
              </button>
              <button className="btn btn-primary" onClick={addToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
