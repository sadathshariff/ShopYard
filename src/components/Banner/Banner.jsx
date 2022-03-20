import "./Banner.css";
import { Button } from "../index";
import { Link } from "react-router-dom";
export const Banner = (props) => {
  const { bannerImg, bannerText } = props;
  return (
    <section>
      <div className="img-banner">
        <img className="hero-img" src={bannerImg} alt="Banner" />
        <div className="overlay-text text-center">
          <p className="small-text-1">{bannerText}</p>
          <Link to="/products">
            <Button btnclass={"btn-secondary"} name={"Shop Now"} />
          </Link>
        </div>
      </div>
    </section>
  );
};
