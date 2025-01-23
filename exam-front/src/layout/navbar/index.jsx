import React, { useContext } from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { CiSearch,CiHeart,CiShoppingCart } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import BasketContext from '../../context/basket/basketContext';
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const { basket } =
  useContext(BasketContext);
  return (
    <>

    <header>
      <div className="header_container">
      <div className="logo">
        <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="logo" />
      </div>
    <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/basket"><p>Basket</p> <GoTriangleDown /></NavLink>
          </li>
          <li>
            <NavLink to="/wishlist"><p>Wishlist</p> <GoTriangleDown /></NavLink>
          </li>
          <li>
            <NavLink to="/"><p>Blogs</p>  <GoTriangleDown /></NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav_icons">
      <CiSearch />
      <CiHeart /> 
      <CiShoppingCart /> {basket.length? <sup>{basket.length}</sup>:""}
 
      </div>
      <div className="mobile_menu">
<RiMenu3Fill />
</div>
      </div>

    </header>
   
    </>
  )
}

export default Navbar


// https://preview.colorlib.com/theme/aranoz/img/banner_img.png Hero section 
