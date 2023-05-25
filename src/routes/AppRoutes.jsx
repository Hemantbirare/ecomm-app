import { Route, Routes } from "react-router-dom";
import LandingPage from "../component/landingpage/LandingPage";
import Cart from "../component/cart/Cart";
import Checkout from "../component/checkout/Checkout";
import Login from "../component/login/Login";
import Navbar from "../component/Navbar/Navbar";
import ProductDetails from "../component/ProductDetails/ProductsDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/ProductDetails" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
