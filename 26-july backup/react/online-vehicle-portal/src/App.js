import "./App.css";
import Header from "./components/Header";
import RegSupplier from "./components/RegSupplier";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomerLogin from "./components/CustomerLogin";
import ViewCart from "./components/ViewCart";
import RegCustomer from "./components/RegCustomer";
<Route component={RegSupplier} path="/regsupplier" />;

import SellerLogin from "./components/SellerLogin";

import SellerProfile from "./components/SellerProfile";
import AddProduct from "./components/AddProduct";
import MyProducts from "./components/MyProducts";
import Home from "./components/Home";
import EditProduct from "./components/EditProduct";

import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Home} path="/cats" />
          <Route component={RegSupplier} path="/regsupplier" />
          <Route component={RegCustomer} path="/register" />
          <Route component={CustomerLogin} path="/clogin" />
          <Route component={ViewCart} path="/cart" />

          <Route component={SellerLogin} path="/slogin" />

          <Route component={SellerProfile} path="/sprofile" />

          <Route component={AddProduct} path="/add-product" />
          <Route component={EditProduct} path="/edit/:prodid" />
          <Route component={MyProducts} path="/myproducts" />

          <Route component={ContactUs} path="/ContactUs" />
          <Route component={AboutUs} path="/AboutUs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
