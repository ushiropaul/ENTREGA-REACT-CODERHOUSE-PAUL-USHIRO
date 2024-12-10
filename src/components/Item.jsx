import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <>
            <Link 
                className='text-blue-500 text-lg shadow-sm transition-transform transform hover:scale-105' 
                to={`/product/${item.id}`} 
            >
                <div className='rounded-lg border border-gray-300 shadow-md w-[260px] h-[360px] bg-white bg-opacity-90'>
                    <div className='w-full h-[160px] bg-gray-100 rounded-t-lg flex items-center justify-center'>
                        <img 
                            className='object-contain w-full h-full rounded-t-lg' 
                            src={item.img} 
                            alt={item.nombre} 
                        />
                    </div>
                    <div className='p-4'>
                        <p className='text-gray-800 text-base font-medium truncate'>{item.nombre}</p>
                        <p className='text-gray-700 text-sm mt-2'>${item.precio}</p>
                        <p className='text-blue-500 text-sm mt-4 underline'>Ver más</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Item
