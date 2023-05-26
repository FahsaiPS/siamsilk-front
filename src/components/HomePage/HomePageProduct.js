import { Link } from "react-router-dom";

function HomePageProduct(props) {
  const { product } = props;
  const { _id, name, price, image, details } = product;

  return (
    <div>
      <Link to={`/product/${_id}`}>
      <div className="product-grid-item">
          <img className="product-image" src={image} alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p>{details}</p>
          <h4 className="card-text">฿ {price}</h4>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default HomePageProduct;