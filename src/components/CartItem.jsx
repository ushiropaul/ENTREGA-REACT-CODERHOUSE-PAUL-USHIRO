import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/cartContext';

function CartItem({ item }) {
    const { changeCountItemCart, itemCartRemove } = useContext(CartContext);
    const [count, setCount] = useState(item.quantityOnCart);

    useEffect(() => {
        changeCountItemCart(item, count);
    }, [count]);

    const checkNegative = () => (count === 1 ? 1 : count - 1);

    return (
        <li className="flex flex-col lg:flex-row items-center justify-between mt-4 pb-3 border-b border-black space-y-4 lg:space-y-0">
            <p className="text-lg lg:text-xl text-center lg:text-left lg:w-1/4">{item.nombre}</p>
            <div className="flex items-center justify-center space-x-4 lg:w-1/4">
                <img
                    className="h-6 cursor-pointer"
                    src="/img/leftArrow.png"
                    alt="Decrease"
                    onClick={() => setCount(checkNegative())}
                />
                <p className="text-lg lg:text-xl">{count}</p>
                <img
                    className="h-6 cursor-pointer"
                    src="/img/rightArrow.png"
                    alt="Increase"
                    onClick={() => setCount(count + 1)}
                />
            </div>
            <button
                className="btn bg-red-500 text-white rounded-lg font-semibold py-2 px-4 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
                onClick={() => itemCartRemove(item)}
            >
                Quitar
            </button>
        </li>
    );
}

export default CartItem;
