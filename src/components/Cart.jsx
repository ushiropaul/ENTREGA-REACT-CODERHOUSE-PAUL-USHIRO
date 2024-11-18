import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from '../contexts/cartContext';
import CheckoutForm from './CheckoutForm';

function Cart() {
    const { cart, cartValue, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <>
                <div className="flex flex-grow justify-center">
                    <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-r from-gray-900 to-gray-700">
                        <p className="text-4xl md:text-6xl mt-8 mb-12 text-white">El carrito está vacío</p>
                        <img className="w-1/3 md:w-1/4" src="/img/empyCart.png" alt="carrito vacío" />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-col md:flex-row gap-8 px-6 md:px-32 py-8 bg-gradient-to-r from-gray-800 to-gray-600 min-h-screen">

                {/* Cart Items Section */}
                <div className="w-full md:w-1/2 bg-gray-900 rounded-xl shadow-xl p-6">
                    <p className="text-4xl md:text-5xl text-white mb-8">Carrito de Compras</p>
                    <ul className="space-y-4">
                        <li className="flex justify-between text-xl font-semibold text-gray-300 border-b border-gray-600 pb-4">
                            <p className="w-1/3">Producto</p>
                            <p className="w-1/4 text-center">Precio</p>
                            <p className="w-1/4 text-center">Cantidad</p>
                            <p className="w-1/4 text-center">Sub Total</p>
                        </li>
                        {cart.map(cartItem => <CartItem item={cartItem} key={cartItem.id} />)}
                    </ul>

                    <div className="flex justify-between mt-8">
                        <p className="text-2xl font-semibold text-white">Total: ${cartValue()}</p>
                        <div className="flex gap-4">
                            <button className="btn bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 px-4 focus:outline-none transition-all">Limpiar Carrito</button>
                            <Link to='/'>
                                <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 focus:outline-none transition-all">Continuar Comprando</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Checkout Form Section */}
                <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-800 rounded-xl shadow-xl p-6">
                    <CheckoutForm />
                </div>
            </div>
        </>
    );
}

export default Cart;
