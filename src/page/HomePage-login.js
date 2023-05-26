import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import './HomePage.css';
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import HomePageProduct from "../components/HomePage/HomePageProduct";
import NavbarLogin from "../components/Navbar/Navbar-login";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation} from "swiper";

const HomePageLogin = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
  const response = await fetch('http://localhost:8000/product')
  const products = await response.json()
  setProducts(products)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

const ProductItems = products.slice(0,3).map((content, index) => {
    return <HomePageProduct key={index} product={content} />;
});
    return (
        <div className="Homepage">
            <NavbarLogin/>
            <Slider/>
          <div className="container">
          <div className='silk-product'>
            <h2 className="home-title"><a href="/products">Silk Product</a></h2>
            <div className='product-grid'>
              {ProductItems}
            </div>
          </div>
          <div className='silk-story'>
            <h2 className="home-title"><a href="/silk-story">Silk Story</a></h2>
            <Swiper
              slidesPerView={2}
              spaceBetween={50}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              // Responsive breakpoints
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <a class="swiper-button-prev">&#8249;</a>
              <SwiperSlide>
                <Link to={`/silk-story/645fc599abcb78cc6861ef24`}>
                <img src="/assets/story-2.jpg"></img>
                <h3 className="story-title">The name of the pattern of Mudmee silk in the Northeast</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={`/silk-story/645fc5e5abcb78cc6861ef26`}>
                <img src="/assets/community-2.jpg"></img>
                <h3 className="story-title">Washing & Cleaning Your favorite silk by yourself</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={`/silk-story/645fc60aabcb78cc6861ef28`}>
                <img src="/assets/natural-1.png"></img>
                <h3 className="story-title">How to make tie-dyed fabric from natural dyes</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/story-1.jpg"></img>
                <h3 className="story-title">Praewa silk, Ban Phon women's professional group weaving Praewa silk</h3>
              </SwiperSlide>
              <a class="swiper-button-next">&#8250;</a>
            </Swiper>
          </div>
          <div className='silk-community'>
            <h2 className="home-title"><a href="/silk-community">Silk Community</a></h2>
            <div className='community-main-grid'>
            <Link to={`/silk-community/645fcf084a64a9cef765f6d4`}>
              <div className='community-main-grid-item'>
              <img  className="community-main-img" src= "/assets/community-main.jpg" />
              </div>
            </Link>
              <div className='community-main-grid-item'>
              <h3>Women's Group for Silk Weaving at Ban Nong Bua, Sokanokten</h3>
              <p>Heat 12 tells the story of Khon Kaen, the land of silk.</p>
              <div class="d-flex justify-content-left">
                    <a href={`/silk-community/645fcf084a64a9cef765f6d4`} className="btn btn-primary btn-block" role="button">Read More</a>
                </div>
              </div>
            </div>
            <div className='community-sub-grid'>
              <div className='community-sub-grid-item'>
              <Link to={`/silk-community/645fcf3d4a64a9cef765f6d8`}>
              <img className="community-sub-img" src= "/assets/community-1.jpg" />
              </Link>
              </div>
              <div className='community-sub-grid-item'>
              <Link to={`/silk-story/645fc5e5abcb78cc6861ef26`}>
              <img className="community-sub-img" src= "/assets/community-2.jpg" />
              </Link>
              </div>
              <div className='community-sub-grid-item'>
              <Link to={`/silk-community/645fcf4e4a64a9cef765f6da`}>
              <img className="community-sub-img" src= "/assets/community-3.jpg" />
              </Link>
              </div>
            </div>
          </div>
          </div>
          <Footer/>
        </div>
      );
}

export default HomePageLogin;