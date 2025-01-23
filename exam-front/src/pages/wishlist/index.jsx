import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import WishlistContext from '../../context/wishlist/wishlistContext'
import { CiShoppingCart } from "react-icons/ci";
import { IoHeartOutline,IoHeartSharp } from "react-icons/io5";
import BasketContext from '../../context/basket/basketContext';

const Wishlist = () => {
  const { wishlist,addToWishlist  } = useContext(WishlistContext)
  const { addToBasket } = useContext(BasketContext);


  return (
    <>
         <Helmet>
        <title>Wishlist</title>
      </Helmet>
<section id="wishlist">
<div className="wishlist_container">
  {wishlist.map((item) => {
          return (
            <div className="product" key={item._id}>
              <img src={item.image} alt={item.name} />
              <h2 className="product_name">{item.name}</h2>
              <p className="product_price">{item.price}</p>
              <div className="heart_icon">
                
                {
                    wishlist.find((elem)=>elem._id==item._id)?<IoHeartSharp onClick={()=>addToWishlist(item)} />   : <IoHeartOutline  onClick={()=>addToWishlist(item)}/>
                }
               </div>
             
               <div className="basket_btn" onClick={() => addToBasket(item)}>
                    Add To Basket
                  </div>
            </div>
          );
        })}



</div>
</section>
      
    </>
  )
}

export default Wishlist
