import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layout/mainlayout";
import Basket from "./pages/basket";
import Wishlist from "./pages/wishlist";
import Nopage from "./pages/nopage";
import Details from "./pages/deatils";
import AdminNav from "./adminpanel/adminnav";
import Admin from "./adminpanel/admin";
import AdminAdd from "./adminpanel/adminadd";
import AdminDetail from "./adminpanel/admindetail";
import Home from "./pages/home";
import WishlistProvider from "./context/wishlist/wishlistProvider";
import BasketProvider from "./context/basket/basketProvider";

function App() {

  return (
    <>
    <BasketProvider>
    <WishlistProvider>
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Details />} />
          <Route path="*" element={<Nopage />} />
        </Route>
        <Route path="/admin" element={<AdminNav />}>
          <Route index element={<Admin />} />
          <Route path="addnew" element={<AdminAdd />} />
          <Route path="details/:id" element={<AdminDetail />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </WishlistProvider>
    </BasketProvider>
    </>
  )
}

export default App
