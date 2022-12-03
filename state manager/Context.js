import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateManager = ({ children }) => {
  const [items, setitems] = useState([]);
  const [showCartNoti, setShowCartNoti] = useState(false);
  const [qty, setQty] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);

  const addToCart = (product, quantity) => {
    const checkItems = items.find((i) => i._id === product._id);
    if (checkItems) {
      setTotalPrice((prev) => prev + product.price * quantity);
      setTotalQty((prev) => prev + quantity);
      const update = items.map((i) => {
        if (i._id === product._id) return {
            ...i,
            quantity: i.quantity + quantity,
          };
      });
      setitems(update);
    
    }else{
        product.quantity=quantity;
        setitems([...items],{...product})
    } 
 
    quantity===0? toast.error('wrong'):
    toast.success(`Added ${quantity} ${product.name} to your cart! `);
  }; 
const addQty = () => (qty === 10 ? setQty(qty) : setQty(qty + 1));
const minQty = () => (qty === 0 ? setQty(qty) : setQty(qty - 1));
return (
  <Context.Provider
    value={{ items, showCartNoti, qty, totalQty, addQty, minQty, addToCart }}
  >
    {children}
  </Context.Provider>
);
}
export const useStateManager = () => useContext(Context);
