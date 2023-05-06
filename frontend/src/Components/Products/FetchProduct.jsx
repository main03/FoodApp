import React, { useState, useEffect,useContext} from "react";
import Navigation from "../Navigation/Navigation";
import ViewBooks from "./ViewProducts";
import { CartContext } from "../../Context/CartContext";


const GetBooks = () => {
  const [products, setProducts] = useState([]);
 const {name} =useContext(CartContext)

  useEffect(() => {
    fetch("http://localhost:5000/food/listofproducts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.foodappdata);
       
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(products); // Log products to check the data structure

  return (
    <div className="container mx-auto pb-24">
      <h1 className=" font-bold my-8 dart">Available Products {name}</h1>
      {Array.isArray(products) &&
        products.map((product) => {
          
            return <ViewBooks key={product._id} product={product} />;
          })}

    </div>
  );
};

export default GetBooks;
