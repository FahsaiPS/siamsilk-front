import { Link } from 'react-router-dom';
import './Products.css'

function ProductsCard(props){
    const { product } = props;
    const { _id, name, price, image, details } = product;

    return(
        <div className='product'>
            <Link to={`/product/${_id}`}>
            <div className="card">
                <img src={image} className="card-img-top" alt="..."/> 
                <div className="content">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{details}</p>
                <span className="card-text">฿ {price}</span>
                </div>
            </div>
            </Link> 
         </div>     
    );
}

export default ProductsCard;