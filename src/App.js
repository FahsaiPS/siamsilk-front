import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import pages
import HomePage  from './page/HomePage.js';
import LoginPage from './page/LoginPage';
import HomePageLogin from './page/HomePage-login';
import PaymentPage from './page/PaymentPage';
import CommuContentPage from './page/CommuContentPage';
import StoryContentPage from './page/StoryContentPage';
import CommunityPage from './page/CommunityPage';
import StoryPage from './page/StoryPage';
import ProductsPage from './page/ProductsPage';
import DetailsPage from './page/DetailsPage';
import CartPage from './page/CartPage';

import Login from './data/Login';
import Register from './data/Register';
import { ToastContainer } from 'react-toastify';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <ShopContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/homelogin' element={<HomePageLogin />}></Route>
          <Route path='/payment/:id' element={<PaymentPage />}></Route>
          <Route path='/silk-community' element={<CommunityPage />}></Route>
          <Route path='/silk-story' element={<StoryPage />}></Route>
          <Route path='/silk-community/:id' element={<CommuContentPage />}></Route>
          <Route path='/silk-story/:id' element={<StoryContentPage />}></Route>
          <Route path='/products' element={<ProductsPage />}></Route>
          {/* <Route path='/detail' element={<DetailsPage />}></Route> */}
          <Route path='/product/:id' element={<DetailsPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
