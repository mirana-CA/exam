import React, { useContext, useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import WishlistContext from "../../context/wishlist/wishlistContext";
import BasketContext from "../../context/basket/basketContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const { addToBasket } = useContext(BasketContext);

  useEffect(() => {
    fetch("http://localhost:3000/aranoz/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* HERO SECTION START  */}

      <section id="hero_section">
        <div className="hero_section_container">
          <div className="hero_section_ls">
            <h1>Cloth & Wood Sofa</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod
              adipisicing elit amet consectetur .{" "}
            </p>
            <button>BUY NOW</button>
          </div>
          <div className="hero_section_rs">
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* HERO SECTION END  */}

      {/* PRODUCTS SECTION START  */}
      <section id="products_section">
        <div className="products_section_container">
          <div className="products_section_headings">
            <h1>Awesome</h1>
            <p>Shop</p>
          </div>
          <div className="arrows">
            Next <span>|</span> Pervious
          </div>
          <div className="products_container">
            {products.map((item) => {
              return (
                <div className="product" key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <h2 className="product_name">
                    <Link to={"detail/" + item._id}> {item.name}</Link>
                  </h2>
                  <p className="product_price">${item.price}.00</p>
                  <div className="heart_icon">
                    {wishlist.find((elem) => elem._id == item._id) ? (
                      <IoHeartSharp onClick={() => addToWishlist(item)} />
                    ) : (
                      <IoHeartOutline onClick={() => addToWishlist(item)} />
                    )}
                  </div>

                  <div className="basket_btn" onClick={() => addToBasket(item)}>
                    Add To Basket
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* PRODUCTS SECTION END  */}

      {/* BEST SELLERS START  */}
      <section id="products_section">
        <div className="products_section_container">
          <div className="products_section_headings">
            <h1>Best Sellers</h1>
            <p>Shop</p>
          </div>
          <div className="arrows">
            Next <span>|</span> Pervious
          </div>
          <div className="products_container">
            <div className="product">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png"
                alt="product"
              />
              <h2 className="product_name">Quartz Belt Watch</h2>
              <p className="product_price">$150.00</p>
            </div>
            <div className="product">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/product/product_2.png"
                alt="product"
              />
              <h2 className="product_name">Quartz Belt Watch</h2>
              <p className="product_price">$150.00</p>
            </div>
            <div className="product">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png"
                alt="product"
              />
              <h2 className="product_name">Quartz Belt Watch</h2>
              <p className="product_price">$150.00</p>
            </div>
            <div className="product">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png"
                alt="product"
              />
              <h2 className="product_name">Quartz Belt Watch</h2>
              <p className="product_price">$150.00</p>
            </div>
          </div>
        </div>
      </section>
      {/* BEST SELLERS END  */}

      {/* SUBSCRIBE SECTION START  */}
      <section id="subscribe_section">
        <div className="subscribe_section_container">
          <p>Join Our Newsletter</p>
          <h2>Subscribe to get Updated with new offers</h2>
          <form>
            
            <input type="text" placeholder="Enter Email Address" />
            <button>SUBSCRIBE NOW</button>
          </form>
        </div>
      </section>
      {/* SUBSCRIBE SECTION END  */}
    </>
  );
};

export default Home;
