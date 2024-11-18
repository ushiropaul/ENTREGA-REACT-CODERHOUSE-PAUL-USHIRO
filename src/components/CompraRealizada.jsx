import { useLocation } from 'react-router-dom';

function CompraRealizada() {
    const location = useLocation();
    const { orderId } = location.state || {}; // Obtener el ID de la orden

    return (
        <div className="h-screen items-center flex flex-col bg-gray-900 text-white">
            <p className="text-5xl mt-20 mb-12">¡Compra realizada con éxito!</p>
            {orderId && (
                <p className="text-2xl mb-6">
                    Tu ID de la orden de compra es: <span className="font-bold">{orderId}</span>
                </p>
            )}
            <p className="text-xl">
                Por favor, paga en el local de pago más cercano utilizando este identificador.
            </p>
        </div>
    );
}

export default CompraRealizada;
