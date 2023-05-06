import React, { useState,useContext} from "react";
import { Link } from "react-router-dom";
import "./ViewBooks.css";
import { CartContext } from "../../Context/CartContext";

const ViewBooks = (props) => {
  const { product } = props;
  const [isAdding, setIsAdding] = useState(false);
  const {cart,setcart}=useContext(CartContext)

  const addtocart = (e, product) => {
    e.preventDefault();
    let _cart={...cart};
    if(!_cart.items)
    {
      _cart.items={}
    }
    if(_cart.items[product._id])
    {
      _cart.items[product._id]+=1;
    }
    else{
      _cart.items[product._id]=1;
    }
    if(! _cart.totalItems)
    {
      _cart.totalItems=0
    }
  
    _cart.totalItems += 1;
    setcart(_cart)
    setIsAdding(true);
    setTimeout(() => {
        setIsAdding(false);
    }, 1000);
  };

  return (
    <Link to={`/products/${product._id}`}>
      <div className="inline-block px-7">
        <img
          src={product.PizzaImage ? `http://localhost:5000/${product.PizzaImage}` : ""}
          style={{ height: "200px", width: "200px" }}
          alt="pizza"
        />

        <div className="a">
          <h2 className="text-lg font-bold py-2 flutter">{product.FlavourName}</h2>
          <div>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
              {product.Size}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="dart">₹ {product.Price}</span>
          <button  disabled={isAdding}
           onClick={(e)=> {addtocart(e,product)}} 
           className={`${isAdding ? 'bg-green-500' :'bg-yellow-500' }
                 py-1 px-4 rounded-full font-bold`}>
               Add{`${isAdding ? 'ed' : ''}`}
          
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ViewBooks;
