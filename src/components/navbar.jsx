import React from "react";
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import Logo from "../../src/assets/Skylett_logo.png"
import "./navbar.css"
 
export const Navbar = () => {
    return <div className="navbar">   <img src={ Logo } alt=" site logo"/>
        <div className="links">
            <Link to="/"> shop </Link>
            <Link to="/cart"> <ShoppingCart size={32}/> </Link>            
        </div>
    </div>
};