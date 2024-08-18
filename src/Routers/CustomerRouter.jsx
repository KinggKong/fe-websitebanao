import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/component/pages/HomePage/HomePage";
import Cart from "../customer/component/Cart/Cart";
import Navigation from '../customer/component/Navigation/Navigation';
import Footer from '../customer/component/Footer/Footer';
import Product from "../customer/component/Product/Product";
import ProductDetail from "../customer/component/ProductDetail/ProductDetail";
import Checkout from "../customer/component/Checkout/Checkout"
import Order from "../customer/component/Order/Order";
import OrderDetails from "../customer/component/Order/OrderDetails"

const CustomerRouter = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>

            <Routes>
                <Route path="/login" element={<HomePage></HomePage>}></Route>
                <Route path="/register" element={<HomePage></HomePage>}></Route>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product></Product>}></Route>
                <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
                <Route path="/checkout" element={<Checkout></Checkout>}></Route>
                <Route path="/account/order" element={<Order></Order>}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetails></OrderDetails>}></Route>

                {/* <Order></Order> */}
                {/* <OrderDetails></OrderDetails> */}
            </Routes>

            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default CustomerRouter;