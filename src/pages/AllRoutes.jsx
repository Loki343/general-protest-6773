import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Admin from "./Admin";
import VoucherDetails from "../pages/VoucherDetails";
import Home from "./Home";
import AdminProducts from "../Components/AdminComponents/Products/AdminProducts";
import Sale from "../Components/First_Column_rrb/Files/Sale";
import Men from "../Components/First_Column_rrb/Files/Men";
import Accessories from "../Components/First_Column_rrb/Files/Accesssories";
import Bags from "../Components/First_Column_rrb/Files/Bags";
import Clothing from "../Components/First_Column_rrb/Files/Clothing";
import Life from "../Components/First_Column_rrb/Files/Life";
import NewArrival from "../Components/First_Column_rrb/Files/NewArrival";
import JewelleryFirst from "../Components/Second_Column_rrb/JewelleryFirst";
import JewellerySecond from "../Components/Second_Column_rrb/JewellerySecond";
import JewelleryThird from "../Components/Second_Column_rrb/JewelleryThird";
import JewelleryFourth from "../Components/Second_Column_rrb/JewelleryFourth";

import Dashboard from "../Components/Dashboard/Dashboard";
import Users from "../Components/AdminUsers/Users";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import Successfullorder from "./Successfullorder";
import Order from "../Components/Orders/Order";
import Products from "./Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Order />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<AdminProducts/>} />
      </Route>

      <Route path="/:voucher_id" element={<VoucherDetails />} />
        <Route path="products" element={<Products/>}>
          <Route path="accessories" element={<Accessories/>}/>
          <Route path="bags" element={<Bags/>}/>
          <Route path="clothing" element={<Clothing/>}/>
          <Route path="cosmetics" element={<Life/>}/>
          <Route path="products" element={<Men/>}/>
          <Route path="shoes" element={<NewArrival/>}/>
          <Route path="sale" element={<Sale/>}/>
          <Route path="earrings" element={<JewelleryFirst/>}/>
          <Route path="rings" element={<JewellerySecond/>}/>
          <Route path="necklace" element={<JewelleryThird/>}/>
          <Route path="jewellery" element={<JewelleryFourth/>}/>
        </Route>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="checkoutpage" element={<CheckoutPage/>}/>
        <Route path="successfullorder" element={<Successfullorder/>}/>
    </Routes>
  );
};

export default AllRoutes;

