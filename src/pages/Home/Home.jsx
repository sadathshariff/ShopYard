import "./Home.css";
import axios from "axios";
import BannerImg1 from "../../assets/BannerImage1.jpg";
import BannerImg2 from "../../assets/BannerImage2.jpg";
import { useEffect, useState } from "react";
import { Category, Banner, Loading } from "../../components/index";

export const Home = () => {
  const [categories, setCateories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/categories");
      setCateories(data.categories);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home-container">
      <Banner
        bannerImg={BannerImg1}
        bannerText={"Polo shirts in cotton pique with a ribbed collar"}
      />
      <h3 className="headline-3 text-center">Trending Categories</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="categories-container">
          {categories.map(({ _id, title, imageUrl }) => (
            <Category key={_id} title={title} imageUrl={imageUrl} />
          ))}
        </div>
      )}
      <Banner
        bannerImg={BannerImg2}
        bannerText={"Welcome to the Season of Denim"}
      />
    </div>
  );
};
