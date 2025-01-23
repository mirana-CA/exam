import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import WishlistContext from "../../context/wishlist/wishlistContext";
import BasketContext from "../../context/basket/basketContext";
import { CiShoppingCart } from "react-icons/ci";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const AdminDetail = () => {
  let params = useParams();
  const [product, setProduct] = useState([]);
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const { addToBasket } = useContext(BasketContext);

  useEffect(() => {
    fetch("http://localhost:3000/aranoz/" + params.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>AdminDetail</title>
      </Helmet>
      <div className="admin_detail">
      <div className="product">
        <img src={product.image} alt={product.name} />
        <h2 className="product_name"> {product.name}</h2>
        <p className="product_price"> ${product.price}</p>

      </div>
      </div>

    </>
  );
};

export default AdminDetail;
