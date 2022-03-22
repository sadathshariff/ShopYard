import { Link } from "react-router-dom";
import { useFilter } from "../../../contexts/filterContext/context";
import styles from "./ProductCard.module.css";
export const ProductCard = (props) => {
  const { img, name, price, description } = props;
  const { setShowProduct } = useFilter();
  return (
    <Link to="/productDetails">
      <div className={styles.card} onClick={() => setShowProduct(props)}>
        <img src={img} alt={name} className="card-img" />
        <div className="card-close-icon"></div>
        <div className="card-header">
          <h3 className="headline-3">{name}</h3>
          <p className="small-text-2">Rs.{price}</p>
          <p className="small-text-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};
