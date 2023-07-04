import { createContext, useState, useContext} from "react";

const CartContext = createContext();
const CartProvider = ({childern}) => {
    const [cart,setCart] = useState([]);

return (
    <CartContext.Provider value = {[cart,setCart]}>
           {childern}
    </CartContext.Provider>
);
};


const useCart = () => useContext(CartContext) ;

export {useCart , CartProvider }
// ................................