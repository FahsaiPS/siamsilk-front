import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
// import '../page/Products.css'
import ProductsCard from "../components/Products/ProductsCard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const ProductName = searchParams.get("q")
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const response = await fetch('http://localhost:8000/product')
        const products = await response.json()
        setProducts(products)
    }
    useEffect(() => {
        fetchProducts()
    }, [])  
    
    let ProductItems;
    if (ProductName !== null) {
        ProductItems = products.filter((content)=>{
            const nameDetailConcat = content.name.toUpperCase() + content.details.toUpperCase() + content.name.toLowerCase() + content.details.toLowerCase()+ content.name + content.details;
            return nameDetailConcat.includes(ProductName);
        }).map((content, index) => {
            return <ProductsCard key={index} product={content} />;
        });
    } else {
        ProductItems = products.map((content, index) => {
            return <ProductsCard key={index} product={content} />;
        });
    }


    return (
    <div> 
        <Navbar/>
        <div className='topic-text'>{ProductName || "Products"}</div>
        <div className="product">{ProductItems}</div>
        <Footer/>
    </div>    
      );
}

export default ProductsPage;
