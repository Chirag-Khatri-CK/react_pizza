import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';


function Navigation() {

    const cartstyle = {
        background : "#F59E0D",
        display: 'flex',
        padding: '6px 12px',
        borderRadius:'5px',
        height:'45px',
        width: '70px',
    }

    const { cart } = useContext(CartContext);

    return (
        <>
            <nav className="container mx-auto flex items-center p-10 justify-between py-2">

                <Link to="/">
                    <img style={{ height: 150, width: 150}} className="mt--2" src="/images/logo.jpg" alt="logo"></img>
                </Link>

                <ul className="flex items-center">

                    <li> <Link to="/">Home</Link></li>
                    <li className="ml-6 " > <Link to="/products">Products</Link></li>
                    <li className="ml-6" > <Link to="/about">About Us</Link></li>
                    <li className="ml-6" >
                        <Link to="cart">
                        <div style={cartstyle}>
                            <span className="mt-1 font-bold">{ cart.totalItems ? cart.totalItems : 0 }</span>
                            <img src="/images/cart.png" alt="cart-icon"/>
                        </div>

                        </Link>
                    </li>
 
                </ul>

            </nav>
        </>
    )
}

export default Navigation;