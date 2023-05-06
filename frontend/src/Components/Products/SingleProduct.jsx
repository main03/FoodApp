import React from 'react'
import { useState, useEffect,useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

 const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate=useNavigate();
    const {cart,setcart}=useContext(CartContext)
    const [isAdding, setIsAdding] = useState(false);
   
    useEffect(() => {
        fetch(`http://localhost:5000/food/${params._id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
        })
    }, [params._id]);
    const abcx=()=>
    {
        navigate('/')
    }
    const addtocart = (e, product) => {
        // e.preventDefault();
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
       <div className='container mx-auto mt-12'>
       <button className='mb-12 font-bold dart' onClick={ () => { abcx() } }>Back</button>
       <div className="flex">
                <img   src={`http://localhost:5000/${product.PizzaImage}`} alt="pizza" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold flutter">{ product.FlavourName }</h1>
                    <div className="text-md dart">{ product.Size }</div>
                    <div className="font-bold mt-2 dart">₹ { product.Price }</div>
                    <br></br>
                    <button
                      onClick={(e)=> {addtocart(e,product)}} 
           className={`${isAdding ? 'bg-green-500' :'bg-yellow-500' }
                 py-1 px-4 rounded-full font-bold`}>
               Add to cart{`${isAdding ? 'Added to Cart' : ''}`
                 }  </button>
                </div>
            </div>
      
       </div>

      
 
    )
}
export default SingleProduct