import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/aranoz/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  function deleteProduct(item) {
    fetch("http://localhost:3000/aranoz/" + item._id, {
      method: "DELETE",
    });
  }
  function sortLower() {
    setProducts([...products].sort((a, b) => (a.price > b.price ? 1 : -1)));
  }
  function sortHigher() {
    setProducts([...products].sort((a, b) => (a.price < b.price ? 1 : -1)));
  }
  function sortAtoZ() {
    setProducts(
      [...products].sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      )
    );
  }
  function sortZtoA() {
    setProducts(
      [...products].sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      )
    );
  }
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <div className="admin">
      <div className="buttons">
        <button onClick={() => sortLower()}>Lower Price</button>
        <button onClick={() => sortHigher()}>Higher Price</button>

        <button onClick={() => sortAtoZ()}>A to Z</button>

        <button onClick={() => sortZtoA()}>Z to A</button>
        <input type="text" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.filter((i)=>i.name.toLowerCase().includes(search)) 
          
          .map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td className="item_name">
                  <Link to={"details/" + item._id}>{item.name}</Link>
                </td>
                <td>$ {item.price}</td>
                <td className="delete_btn" onClick={() => deleteProduct(item)}>Delete</td>
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
      </div>

    </>
  );
};

export default Admin;
