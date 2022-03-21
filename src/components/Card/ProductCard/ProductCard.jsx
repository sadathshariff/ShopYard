import "./ProductCard.css";
import { FiHeart } from "react-icons/fi";
export const ProductCard = (props) => {
  const { img, name, price, description } = props;
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" />
      <div className="card-close-icon"></div>
      <div className="card-header">
        <h3 className="headline-3">{name}</h3>
        <p className="small-text-2">Rs.{price}</p>
        <p className="small-text-3">{description}</p>
      </div>
    </div>
  );
};
