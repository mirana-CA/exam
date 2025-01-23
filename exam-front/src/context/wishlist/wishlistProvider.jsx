import React, { useState } from 'react';
import WishlistContext from './wishlistContext';
import useLocalStorage from 'use-local-storage';

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);;
function addToWishlist(item) {
    let findedElem = wishlist.find((elem)=>elem._id==item._id)
    findedElem? setWishlist(wishlist.filter((elem)=>elem._id!=item._id)):setWishlist([...wishlist,item])
}

  return (
    <WishlistContext.Provider value={{ wishlist,addToWishlist  }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;