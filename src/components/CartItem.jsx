import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';
import { useState, useEffect } from "react";

function CartItem({ item }) {

    const { changeCountItemCart, itemCartRemove } = useContext(CartContext);

    const [count, setCount] = useState(() => { return item.quantityOnCart });

    useEffect(() => {

        changeCountItemCart(item, count)

    }, [count]);





    const checkNegative = () => {
        if (count === 1) {
            return 1;
        } else {
            return count - 1;
        }
    }


    return (


        <>
            <li className='flex mt-4 pb-3 border-b border-black'>
                <p className='text-xl text-left w-52'>{item.nombre}</p>
                {item.precioDescuento !== undefined && <p className='text-xl w-32'>${item.precioDescuento}</p> }
                {item.precioDescuento == undefined && <p className='text-xl w-32'>${item.precio}</p> }
                <div className='flex w-32 items-center justify-center'>
                    <img className='h-5' src='/img/leftArrow.png' onClick={() => setCount(checkNegative())}/>
                    <p className='text-xl ml-5 mr-5'>{count}</p>
                    <img className='h-5' src='/img/rightArrow.png' onClick={() => setCount(count + 1)}/>
                </div>
                {item.precioDescuento !== undefined && <p className='text-xl w-32'>${item.precioDescuento * item.quantityOnCart}</p> }
                {item.precioDescuento == undefined && <p className='text-xl w-32'>${item.precio * item.quantityOnCart}</p> }
                <button className='btn bg-red-500 hover:bg-red-600 focus:outline-none h-8 items-center pt-0 pb-0 ' onClick={() => itemCartRemove(item)}>Quitar</button>
            </li>


        </>


    )

};


export default CartItem;