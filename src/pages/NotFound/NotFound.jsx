import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wishlist-center-div ">
        <h1 className="headline-1">404</h1>
        <h2 className="headline-2">Page Not Found</h2>
        <p className="small-text-2">You ended up somewhere else</p>
        <Button
          name={"Shop Now"}
          btnclass={"btn-secondary"}
          onClick={() => navigate("/products")}
        />
      </div>
    </>
  );
};
