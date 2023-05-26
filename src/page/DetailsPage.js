import React, { useEffect, useState, useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../page/Details.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ShopContext } from "../context/shop-context";

// export class Details extends Component {
//     static contextType = DataContext;
//     state = {
//         product: []
//     }

//     getProduct = () =>{
//         if(this.props.match.params.id){
//             const res = this.context.products;
//             const data = res.filter(item =>{
//                 return item._id === this.props.match.params.id
//             })
//             this.setState({product: data})
//         }
//     };

//     componentDidMount(){
//         this.getProduct();
//     }

//     render() {
//         return (
//                         <div className="details">
//                             {/* <img src={item.src} alt=""/> */}
//                             <div className="box">
//                                 <div className="row">
//                                     <h2>title</h2>
//                                     <span>price</span>
//                                 </div>
//                                 <p>description</p>
//                                 <p>content</p>
//                                 <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
//                                     Add to cart
//                                 </Link>
//                             </div>
//                         </div>
//         )
//     }
// }

const DetailsPage = () => {
  const [product, setProducts] = useState([])
  const navigate = useNavigate();
  const { id } = useParams()
  const { addToCart, cart } = useContext(ShopContext);
  const cartItem = cart[id];

  console.log(id)
  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/payment/${id}` + event.currentTarget.elements.clickBuy.value)
  };
  const fetchProducts = async () => {    
    const response = await fetch(`http://localhost:8000/product/${id}`)
    const product = await response.json()
    setProducts(product)
  }
  useEffect(() => {
      fetchProducts()
  }, [])

  return (
    <div className="app">
      <Navbar/>
            <div className="details">
              <div className="big-img">
                <img src={product.image} />
              </div>

              <div className="box">
                <div className="row">
                  <h2>{product.name}</h2>
                  <div className="color-detail">{product.details}</div>
                  <div className="price-color">฿ {product.price}</div>
                </div>

                <div className="product-detail-topic">PRODUCT DETAILS</div>
                {/* <div className="product-detail">• 100% Thaisilk Brocade mudmee </div> */}
                <div className="product-detail">• Size - {product.size}</div>
                <form onSubmit={handleSubmit}>
                <button className="buyNow" id="clickBuy">BUY NOW</button>
                </form>
                <button className="addToCart" onClick={()=> addToCart(product._id)}>ADD TO CART {cartItem > 0 && <>({cartItem})</>}</button>
              </div>
            </div>
        <Footer/>

    </div>
  );
};

export default DetailsPage;
