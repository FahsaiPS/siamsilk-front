import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import './PaymentPage.css';
// import { ShopContext } from "../context/shop-context";
import CartItems from "../components/Cart/CartItems";

const CartPage = () => {
    // const { cart } = useContext(ShopContext);
    // const [product, setProducts] = useState([])
    // const fetchProducts = async () => {
    // const response = await fetch('http://localhost:8000/product')
    // const product = await response.json()
    // setProducts(product)
    // }
    // useEffect(() => {
    //     fetchProducts()
    // }, [])
    // // const CartItem = products.map((index,content) => {
    // //     if (cart[index._id] !== 0) {
    // //     return <CartItems key={index} product={content} />;
    // //     }
    // // });

    
    return(
        <div className="Payment">
            <Navbar/>
            <div className="container p-5">
            <div className="row">
                <div className="col-sm-12 col-lg-8">
                <h3>Shopping Bag</h3>
                <div className="table">
                <table class="table">
                    <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">PRODUCT</th>
                    <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"><img src="/assets/product-1.jpg" width="300px" height="400px"/></th>
                    <td>Lookkaew Mudmee Silk</td>
                    <td>1</td>
                    <td>5990</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <th scope="row"><img src="/assets/product-5.jpg" width="300px" height="400px"/></th>
                    <td>Surin Yok Dok Silk</td>
                    <td>1</td>
                    <td>3500</td>
                    </tr>
                </tbody>
            </table>
            <div className="test">
                {CartItems}
            </div>
                </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                <h3>Payment Summary</h3>
                <div className="line">
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <p>Order Subtotal</p>
                        <p>Shipping</p>
                    </div>
                    <div className="col-lg-3">
                        <p>฿ {5990+3550}</p>
                        <p>฿ 150</p>
                    </div>
                </div>
                <div className="line">
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <p>Order Total</p>
                    </div>
                    <div className="col-lg-3">
                        <p>฿ {5990+3550+150}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <a href="#" className="btn btn-primary btn-block" role="button">Proceed to Payment</a>
                </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CartPage;