import React, { useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import BasketContext from "../../context/basket/basketContext";

const Basket = () => {
  const { basket, addToBasket, decrement, removeFromBasket, total } =
  useContext(BasketContext);

  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
<div className="basket">
<table className="table">
        <thead >
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {basket.map((item, i) => {
            return (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td> <img src={item.image} alt={item.name} /></td>
                <td >{item.name}</td>
                <td>$ {item.price}</td>
                <td className="counter">
                  <span onClick={()=>decrement(item)}>-</span>
                  <span>{item.count}</span>
                  <span  onClick={()=>addToBasket(item)}>+</span>

                </td>
                <td  className="delete_btn" onClick={()=>removeFromBasket(item)}>Remove</td>
              </tr>
            );
          })}
        </tbody>
      </table>
</div>
  
    </>
  );
};

export default Basket;
