import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import { CartContext } from '../contexts/cartContext';
import CheckoutForm from './CheckoutForm'

function Cart() {

    const { cart, cartValue, clearCart } = useContext(CartContext);



    if (cart.length === 0) {
        return (

            <>
                <div className='flex flex-grow justify-center'>
                    <div className='flex flex-col items-center justify-start h-screen'>

                        <p className='text-6xl mt-8 mb-20'>El carrito esta vacio</p>
                        <img className='w-1/3' src="/img/empyCart.png" alt="carrito vacio" />

                    </div>
                </div>



            </>
        )
    }

    return (
        <>
            <div className='flex ml-[256px] mr-[256px]'>

                <div className='min-h-screen w-1/2'>
                    <p className='text-left text-5xl mt-4 '>Carrito de compras</p>


                    <ul>

                        <li className='flex mt-5 pt-3 pb-3 border-b border-t border-black'> <p className='text-3xl w-52 text-left'>Producto</p> <p className=' text-3xl w-32'>Precio</p> <p className='text-3xl w-32'>Cantidad</p> <p className=' text-3xl w-32 ml-6'>Sub Total</p></li>

                        {cart.map(cartItem => <CartItem item={cartItem} key={cartItem.id} />)}

                    </ul>


                    <div className='flex mt-4 justify-between'>

                        <p className='text-4xl'>Total: {cartValue()}$</p>

                        <button className='btn hover:bg-red-600 focus:outline-none' onClick={() => clearCart()}>Limpiar Carrito</button>

                        <Link to='/' ><button className='btn bg-green-500 hover:bg-green-600 focus:outline-none' >Continuar comprando</button></Link>

                    </div>


                </div>

                <div className='w-1/2 flex justify-center h-[770px]'>
                    <CheckoutForm />
                </div>

            </div>






        </>
    )

}

export default Cart;