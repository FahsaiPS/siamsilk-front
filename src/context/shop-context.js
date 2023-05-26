import React, { createContext, useState} from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart ={}
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        cart[key] = localStorage.getItem(key)
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cart, setCart] = useState([getDefaultCart()]);
    // const addToCart = (id, qty) => {
    //     setCart([...cart, {id, qty}])
    // }
    const addToCart = (itemId) => {
        setCart((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}));
    }
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }
    const contextValue = {cart, addToCart, removeFromCart}
    console.log(cart)

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}