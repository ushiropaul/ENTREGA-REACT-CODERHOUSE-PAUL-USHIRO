import React, { useState, useContext } from 'react';
import { registroCompras } from "../fireBase/db"
import { CartContext } from '../contexts/cartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutForm() {

    const { cart, clearCart } = useContext(CartContext);

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registroCompras({ cart, formData })
        clearCart()
        navigate("/CompraExitosa")          
    };

    return (


        <form onSubmit={handleSubmit} className="m-10 w-4/6 p-8 rounded-xl border border-gray-300 bg-gray-100 shadow-lg space-y-6">

            <div className="space-y-2 flex h-8">
                <label className="block text-2xl font-semibold text-black text-left">Nombre: </label>
                <input className="w-full text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="space-y-2 flex h-8 m-0">
                <label className="block text-2xl font-semibold text-black text-left">Email: </label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3 className="text-2xl text-black font-semibold mt-6">Dirección de Envío</h3>
            <div className="space-y-2 flex h-8 m-0">
                <label className="block text-2xl font-semibold text-black text-left">Dirección: </label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="space-y-2 flex h-8">
                <label className="block text-2xl font-semibold text-black text-left">Ciudad: </label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
            </div>

            

            <button type="submit" className="btn w-full bg-green-500 rounded-lg font-semibold hover:bg-green-600 focus:outline-none ">
                Finalizar Compra
            </button>
        </form>


    );
}

export default CheckoutForm;