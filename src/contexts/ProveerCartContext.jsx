import { useState } from "react";
import { CartContext } from './cartContext'

const ProveerCartContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const itemCartAdd = (item, count) => {
        if (cart.find(itemOnCart => itemOnCart.id === item.id)) {

            changeCountItemCart(item, ((cart.find(itemOnCart => itemOnCart.id === item.id)).quantityOnCart + count))

            return
        } else {

            setCart(cart.concat([{ ...item, quantityOnCart: count }]));
        }

    };

    const itemCartRemove = (item) => {
        setCart(cart.filter(itemOnCart => itemOnCart.id != item.id));
    };

    const changeCountItemCart = (item, count) => {

        setCart(cart.map(itemOnCart => item.id === itemOnCart.id ? { ...itemOnCart, quantityOnCart: count } : itemOnCart));

    }

    const clearCart = () => { setCart([]) };

    const quantityItemsCart = () => { return cart.reduce((total, item) => total + item.quantityOnCart, 0) }

    const cartValue = () => {
        return cart.reduce((total, item) => {
            const price = item.precioDescuento !== undefined ? item.precioDescuento : item.precio;
            return total + (price * item.quantityOnCart);
        }, 0);
    };

    return (<CartContext.Provider value={{ cart, itemCartAdd, itemCartRemove, changeCountItemCart, clearCart, quantityItemsCart, cartValue }}>


        {children}


    </CartContext.Provider>)
}

export default ProveerCartContext;