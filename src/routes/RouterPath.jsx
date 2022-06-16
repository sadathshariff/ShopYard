import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "../components";
import MockAPI from "../mockMan";
import { Checkout } from "../pages/Checkout/Checkout";
import {
  Home,
  Products,
  Cart,
  Wishlist,
  Login,
  Signup,
  NotFound,
} from "../pages/index";

export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mock-api" element={<MockAPI />} />
      <Route path="/productDetails/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
