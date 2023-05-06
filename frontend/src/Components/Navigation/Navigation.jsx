import React,{ useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ThemeConverter from './ThemeConverter';
const Navigation = () => {

    const {cart}=useContext(CartContext)
    const [darkMode, setDarkMode] = useState(false);
    const cartStyle={
        background :'#F59E0D',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px'
      }
    
    return (
        <>
        <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/">
                    <img style={{ height: 45 }} src="/logo.png" alt="logo"  className='logo'/>
                </Link>
                <ul className="flex items-center">
                    <li className='mr-6'><ThemeConverter /></li>
                    <li className="dart"><Link to="/">Home</Link></li>
                    <li className="ml-6 dart"><Link to="/viewbooks">Products</Link></li>
                    <li className="ml-6">
                    <Link to="/cart">
                                <div style={cartStyle}>
                                    <span>{cart.totalItems ? cart.totalItems :0}</span>
                                   
                                    <img className="ml-2" src="/cart.png" alt="cart-icon" />
                                </div>
                            </Link>
                        
                    </li>
                </ul>
                
        </nav>
    </>
      )
}

export default Navigation