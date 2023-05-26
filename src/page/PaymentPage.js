import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import './PaymentPage.css';
import { toast } from 'react-toastify';


const PaymentPage = () => {
    const [product, setProducts] = useState([])
    const { id } = useParams()

    const fetchProducts = async () => {    
      const response = await fetch(`http://localhost:8000/product/${id}`)
      const product = await response.json()
      setProducts(product)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const history = useNavigate();
    const notify = () => {
        toast.success("Payment Successfully.",{
          position: toast.POSITION.TOP_CENTER,className: "noti"
        });
        history("/products")
      }
  
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
                    <th scope="col">PRODUCT</th>
                    <th scope="col">QTY</th>
                    <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td scope="row" className="product-img"><img src={product.image} width="300px" height="400px"/></td>
                    <td>{product.name}</td>
                    <td>1</td>
                    <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>
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
                        <p>฿ {product.price}</p>
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
                        <p>฿ {product.price + 150}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button className="btn btn-primary btn-block" onClick={notify}>Proceed to Payment</button>
                </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PaymentPage;
