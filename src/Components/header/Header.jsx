import React from "react";
import { NavLink } from "react-router-dom";
import Style from './Header.module.css'
import { FaOpencart } from "react-icons/fa6";

function Header() {
    return(
        <>
        <header className={Style.header}>
                <h2>Shop</h2>
                <nav className={Style.nav}>
                <ul className={Style.ul}>
                    <li className={Style.li}><NavLink to='/'>Home</NavLink></li>
                    <li className={Style.li}><NavLink to='/product'>Product</NavLink></li>
                    <li className={Style.li1}><NavLink to='/icon'><FaOpencart/></NavLink></li>
                </ul>
                </nav>
        </header>
        </>
    )
}

export default Header