import { UseAxios } from "../../hooks/index";
import { Loading, ProductCard } from "../../components/index";
import "./Products.css";
import { SideNav } from "./SideNav/SideNav";
import { useFilter } from "../../contexts/filterContext/context";
export const Products = () => {
  // const { response, loading, error } = UseAxios("/api/products");
  // const products = response.products || [];

  const { products, loading, error } = useFilter();

  return (
    <div className="products-container">
      <SideNav />
      <main className="products">
        <section className="products-info">
          <h3 className="headline-3">Showing {products.length} Products</h3>
        </section>
        {loading ? (
          <Loading />
        ) : (
          <section className="products-listing">
            {products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};
