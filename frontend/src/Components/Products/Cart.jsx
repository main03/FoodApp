import React, { useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const Cart = () => {
  let total=0;
  const { cart,setcart } = useContext(CartContext);
  const [product, setProducts] = useState([]);
  const [pricefetched,toggledpricefetched]=useState(false)

  useEffect(() => {
    if (!cart.items) {
      return;
    }
   if(pricefetched)
   {
    return;
   }
    fetch("http://localhost:5000/food/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        console.log(products);
        toggledpricefetched(true);
      });
  }, [cart]);

  const increment=(productid)=>
  {
    const oldquantity=cart.items[productid];
    const _cart= {...cart};
    _cart.items[productid]=oldquantity + 1;
    _cart.totalItems += 1;
    setcart(_cart);
    
  }
  const decrement=(productid)=>
  {
    const oldquantity=cart.items[productid];
    if (oldquantity=== 1) {
      return;
 }
    const _cart= {...cart};
    _cart.items[productid]=oldquantity - 1;
    _cart.totalItems -= 1;
    setcart(_cart);
    
  }
 const GetQty=(productid)=>
  {
    return cart.items[productid]
 }

 const getSum =(id,price)=>
 {
  const totalsum=price * GetQty(id);
  total=total + totalsum;
  return totalsum;
 }
 const handleDelete=(productId)=>
 {
  const _cart={...cart};
  let qty=_cart.items[productId]
  delete _cart.items[productId]
  _cart.totalItems -=qty
  setcart(_cart)
  setProducts(product.filter((product)=> product._id !==productId))

 }
 const handleOrderNow = () => {
  window.alert('Order placed succesfully!');
  setProducts([]);
  setcart({});
}
  return (
    !product.length ?
    <img  className="mx-auto w-2/5 " src="/public/empty-cart.png"></img>
    :
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold dart">Cart items</h1>
      <ul>
        {product.map((product) => {
          return (
            <li className="mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-16"
                     src={product.PizzaImage ? `http://localhost:5000/${product.PizzaImage}` : ""}
                 
                    alt="imagee"
                  />
                  <span className="font-bold ml-4 w-48 dart">{product.FlavourName}</span>
                </div>
                <div>
                  <button
                     onClick={() => {
                        decrement(product._id);
                      }}
                    className="bg-yellow-500 px-4 py-2 rounded-full leading-none dart"
                  >
                    -
                  </button>
                  <b className="px-4 dart">{GetQty(product._id)}</b>
                  <button
                    onClick={() => {
                      increment(product._id);
                    }}
                    className="bg-yellow-500 px-4 py-2 rounded-full leading-none dart"
                  >
                    +
                  </button>
                </div>
                <span className="dart">₹{ getSum(product._id, product.Price) }</span>
                <button onClick={() => { handleDelete(product._id) }}
                className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="text-right">
        <b className="dart">Grand Total:</b> <b className="dart">₹{total}</b>
      </div>
      <div className="text-right mt-6">
        <button  onClick={handleOrderNow}
        className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
