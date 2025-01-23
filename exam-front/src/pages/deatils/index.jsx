import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import WishlistContext from '../../context/wishlist/wishlistContext'
import BasketContext from '../../context/basket/basketContext'
import { CiShoppingCart } from "react-icons/ci";
import { IoHeartOutline,IoHeartSharp } from "react-icons/io5";


const Details = () => {
  let params = useParams()
  const [product, setProduct] = useState([]);
  const { wishlist,addToWishlist  } = useContext(WishlistContext)
  const { addToBasket} = useContext(BasketContext)

  useEffect(() => {
    fetch("http://localhost:3000/aranoz/"+params.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
         <Helmet>
        <title>Details</title>
      </Helmet>
   <div className="detail">
   <div className="product" >
              <img src={product.image} alt={product.name} />
              <h2 className="product_name"> {product.name}</h2>
              <p className="product_price">{product.price}</p>
              <div className="heart_icon">
                
                {
                    wishlist.find((elem)=>elem._id==product._id)?<IoHeartSharp onClick={()=>addToWishlist(product)} />   : <IoHeartOutline  onClick={()=>addToWishlist(product)}/>
                }
               </div>
             
               <div className="basket_btn" onClick={() => addToBasket(item)}>
                    Add To Basket
                  </div>
            </div>
   </div>
           
   

    </>
  )
}

export default Details
