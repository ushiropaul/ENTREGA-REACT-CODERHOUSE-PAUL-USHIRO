import React, { useState, useContext } from 'react';
import { registroCompras } from "./../fireBase/db"; // Función para registrar en Firestore
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

    // Generador de ID único
    const generateUniqueId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < 15; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return id;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderId = generateUniqueId(); // Generar ID único

        // Crear el objeto de compra con información adicional
        const compra = {
            cart, // Detalles del carrito
            formData, // Información del cliente
            orderId, // ID único de la compra
            date: new Date().toISOString(), // Fecha de la compra
        };

        try {
            // Registrar la compra en Firestore
            await registroCompras(compra);
            console.log("Compra registrada exitosamente:", compra);
            clearCart(); // Limpiar el carrito después de la compra
            navigate("/CompraExitosa", { state: { orderId } }); // Pasar el ID como estado
        } catch (error) {
            console.error("Error al registrar la compra:", error);
            alert("Ocurrió un error al completar tu compra. Por favor, inténtalo de nuevo.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto p-8 rounded-xl border border-gray-300 bg-gray-100 shadow-lg space-y-6 lg:space-y-10"
        >
            <div className="space-y-2 flex flex-col md:flex-row items-start md:items-center">
                <label className="block text-lg md:text-xl font-semibold text-black w-full md:w-1/4">Nombre:</label>
                <input
                    className="w-full md:w-3/4 text-lg rounded-lg border border-gray-300 text-black bg-white p-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="space-y-2 flex flex-col md:flex-row items-start md:items-center">
                <label className="block text-lg md:text-xl font-semibold text-black w-full md:w-1/4">Email:</label>
                <input
                    className="w-full md:w-3/4 text-lg rounded-lg border border-gray-300 text-black bg-white p-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <h3 className="text-lg md:text-xl text-black font-semibold mt-6">Dirección de Envío</h3>
            <div className="space-y-2 flex flex-col md:flex-row items-start md:items-center">
                <label className="block text-lg md:text-xl font-semibold text-black w-full md:w-1/4">Dirección:</label>
                <input
                    className="w-full md:w-3/4 text-lg rounded-lg border border-gray-300 text-black bg-white p-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="space-y-2 flex flex-col md:flex-row items-start md:items-center">
                <label className="block text-lg md:text-xl font-semibold text-black w-full md:w-1/4">Ciudad:</label>
                <input
                    className="w-full md:w-3/4 text-lg rounded-lg border border-gray-300 text-black bg-white p-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="btn w-full bg-green-500 text-white rounded-lg font-semibold py-3 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500"
            >
                Finalizar Compra
            </button>
        </form>
    );
}

export default CheckoutForm;
