
import { useRouter } from "next/router";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";


const Context = createContext();

export const StateManager = ({ children }) => {
  
  let found;
  let index;
  const router=useRouter()
  const refresh=()=> {
router.replace(router.push)
  }
  const { pathname } = useRouter();


  const [items, setitems] = useState([]);
  const [showCartNoti, setShowCartNoti] = useState(false);
  const [qty, setQty] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);
  const [role,setRole]=useState()
  const [showBtn,setShowBtn]=useState(false)
  const [cursorVariant,setCursorVariant]=useState("default")
useEffect(() => {
if(pathname==='/product/[slug]'){
  setShowBtn(true)
}
if(pathname==='/'||pathname==='/signin'||pathname==='register'){
  setShowBtn(false)
}
}, [pathname])

    const addToCart = (product, quantity) => {
    
    const checkItems = items.find((i) => i._id === product._id);
  
    let newItems;
    if (checkItems) {
      newItems = items.map((item) => {
        if (item._id === product._id) {

          return {
            ...item,
            quantity: item.quantity + quantity
            
          };
        }
        return item;
      });
    } else {
      product.quantity = quantity;
  setQty(product.quantity)
      newItems = [...items, { ...product }];
    }
if(quantity>0){ 
    setitems(newItems);
    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQty((prev) => prev + quantity);
}else null;
    quantity === 0
      ? toast.error("Please add atleast 1 item!")
      : toast.success(`Added ${quantity} ${product.name} to your cart! `);
  };
  const Removeitem = (product) => {
    found = items.find((item) => item._id === product._id);
    const newCartItems = items.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -found.price * found.quantity);
    setTotalQty(prevTotalQuantities => prevTotalQuantities - found.quantity);
    setitems(newCartItems);
  }
const qtyContriol=(id,value)=> {
found=items.find((item)=> item._id===id)
index =items.findIndex((product) => product._id === id);  
const newCartItems = [...items];
if(value === 'inc') {
   found.quantity += 1 ;
   newCartItems[index]=found;
   setitems(newCartItems)
  setTotalPrice((prevTotalPrice) => prevTotalPrice + found.price)
  setTotalQty(prevTotalQuantities => prevTotalQuantities + 1)
} else if(value === 'dec') {
  if (found.quantity > 1) {
    found.quantity -= 1 ;
    newCartItems[index]=found;
    setitems(newCartItems)
    setTotalPrice((prevTotalPrice) => prevTotalPrice - found.price)
    setTotalQty(prevTotalQuantities => prevTotalQuantities - 1)
  }
}
}

const addQty = () => (qty === 10 ? setQty(qty) : setQty(qty + 1));
const minQty = () => (qty === 0 ? setQty(qty) : setQty(qty - 1));

return (
  <Context.Provider
    value={{cursorVariant,setCursorVariant,setitems,setTotalPrice,setTotalQty, items, showCartNoti, qty, totalQty, addQty, minQty, addToCart,setShowCartNoti ,qtyContriol,Removeitem,totalprice,role,setRole,showBtn,setShowBtn}}
  >
    {children}
  </Context.Provider>
);
}
export const useStateManager = () => useContext(Context);
