import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Products/Cart";
import GetBooks from "./Components/Products/FetchProduct";
import SingleProduct from "./Components/Products/SingleProduct";
import ViewBooks from "./Components/Products/ViewProducts";
import Hero from "./Components/Navigation/Hero";
import Navigation from "./Components/Navigation/Navigation";
import { CartContext } from "./Context/CartContext";
import ThemeConverter from "./Components/Navigation/ThemeConverter";
import Footer from "./Components/Footer/Footer";
import '../tailwind.config.js'
function App() {
  const [cart,setcart]=useState({})
  useEffect(()=>
  {
    window.localStorage.getItem('cart')
  },[])
  useEffect(()=>
  {
    window.localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  return (
    <>
    
      <BrowserRouter>
        <CartContext.Provider value={{cart,setcart}}>
          <Navigation />
          {/* <ThemeConverter /> */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/viewbooks" element={<GetBooks />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:_id" element={<SingleProduct />}></Route>
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
