import "./Category.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts";
export const Category = ({ title, imageUrl, categoryName }) => {
  const { filterdispatch } = useFilter();
  return (
    <>
      <Link to="/products">
        <div
          className="categories-info"
          onClick={() =>
            filterdispatch({
              type: "FILTER_BY_CATEGORY",
              payload: categoryName,
            })
          }
        >
          <img className="img-md round-img" src={imageUrl} alt={title} />
          <p className="small-text-2 gray-text">{title}</p>
        </div>
      </Link>
    </>
  );
};
