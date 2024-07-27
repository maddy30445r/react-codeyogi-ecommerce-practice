import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Products from "./Products";
import Missing from "./Missing";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Productdetail from "./Productdetail";
import Cart from "./Cart";

function App() {
  const [cart, setcart] = useState([
    {
      id: 5,
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      prodname: "Red Nail Polish",
      quantity: 2,
      price: 20.69,
    },
    {
      id: 8,
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
      prodname: "Dior J'adore",
      quantity: 3,
      price: 15.232,
    },
  ]);
  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart}></Navbar>
        <Routes>
          <Route index
            path="/"
            element={<Navigate to={`products/?pageno=${1}`} replace></Navigate>}></Route>
          <Route  path="products" element={<Products></Products>}></Route>
          <Route
            path="/products/:id"
            element={
              <Productdetail cart={cart} setcart={setcart}></Productdetail>
            }></Route>
          <Route
            path="cart"
            element={<Cart cart={cart} setcart={setcart}></Cart>}></Route>
          <Route path="*" element={<Missing></Missing>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
