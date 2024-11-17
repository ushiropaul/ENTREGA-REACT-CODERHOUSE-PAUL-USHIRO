import ItemCount from './ItemCount';
import { useContext, useRef } from 'react';
import { CartContext } from '../contexts/cartContext';

function ItemDetail({ item }) {
    const { itemCartAdd } = useContext(CartContext);
    const countRef = useRef(null);

    if (item.nombre === undefined) {
        return (
            <>
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mx-6 lg:mx-16 xl:mx-24 mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-lg p-6">
                    <img
                        className="rounded-xl shadow-lg w-full lg:w-1/2 max-w-[704px] h-auto border border-gray-700"
                        src="/img/tankLoading.gif"
                        alt="animación cargando"
                    />
                    <div className="w-full lg:w-1/3 h-auto border border-gray-700 rounded-xl p-6 bg-gray-800 text-gray-300 flex flex-col gap-6">
                        <p className="animate-pulse h-12 bg-gray-600 rounded-md"></p>
                        <p className="bg-gray-600 h-10 rounded-md"></p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
                            <ItemCount ref={countRef} />
                            <button
                                onClick={() => {
                                    if (item !== undefined) {
                                        itemCartAdd(item, countRef.current.itemCount());
                                    }
                                }}
                                className="btn w-full sm:w-52 bg-blue-700 hover:bg-blue-500 text-white rounded-md shadow-lg p-2 transition-all"
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-6 lg:mx-16 xl:mx-24 mt-6">
                    <p className="animate-pulse h-8 bg-gray-600 rounded-md w-2/3 mb-4"></p>
                    <p className="animate-pulse h-4 bg-gray-600 rounded-md mb-2"></p>
                    <p className="animate-pulse h-4 bg-gray-600 rounded-md mb-2"></p>
                    <p className="animate-pulse h-4 bg-gray-600 rounded-md mb-2"></p>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mx-6 lg:mx-16 xl:mx-24 mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-lg p-6">
                <img
                    className="rounded-xl shadow-lg w-full lg:w-1/2 max-w-[704px] h-auto border border-gray-700"
                    src={item.img}
                    alt={item.nombre}
                />
                <div className="w-full lg:w-1/3 h-auto shadow-lg bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col gap-6">
                    <p className="text-white text-5xl font-bold">{item.nombre}</p>
                    {item.precioDescuento === undefined ? (
                        <p className="text-blue-400 text-4xl">Precio: ${item.precio}</p>
                    ) : (
                        <>
                            <del className="text-red-500 text-4xl">Precio: ${item.precio}</del>
                            <p className="text-blue-400 text-4xl">Descuento: ${item.precioDescuento}</p>
                        </>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
                        <ItemCount ref={countRef} />
                        <button
                            onClick={() => {
                                if (item !== undefined) {
                                    itemCartAdd(item, countRef.current.itemCount());
                                }
                            }}
                            className="btn w-full sm:w-52 bg-blue-700 hover:bg-blue-500 text-white rounded-md shadow-lg p-2 transition-all"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-6 lg:mx-16 xl:mx-24 mt-6">
                <p className="text-blue-400 text-4xl mb-6 font-semibold">{item.frase}</p>
                <p className="text-gray-300 text-xl">{item.descripcion}</p>
            </div>
        </>
    );
}

export default ItemDetail;
