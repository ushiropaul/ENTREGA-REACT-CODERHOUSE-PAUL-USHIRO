import { Link } from 'react-router-dom'


function Item({ item }) {




    if (item.precioDescuento !== undefined) {

        return (
            <Link className='text-blue text-4xl shadow-md' item={item} to={`/product/${item.id}`}>
                <div className='relative rounded-lg border-1 w-[268px] h-[380px] border-black bg-white bg-opacity-50'>
                    <img className='w-14 absolute right-1' src="/img/descuento.png" alt="descuento" />
                    <img className='w-[268px] h-[180px] rounded-tl-lg rounded-tr-lg mt-5' src={item.img} />
                    <p className='text-black text-4xl mt-4 h-[80px]'>{item.nombre}</p>
                    <del className='text-red-500 text-3xl mt-0'>${item.precio}</del>
                    <p className='text-green-800 text-3xl mt-2'>${item.precioDescuento}</p>


                </div>

            </Link>

        )
    }

    return (






        <>



            <Link className='text-blue text-4xl shadow-md' item={item} to={`/product/${item.id}`}>
                <div className=' rounded-lg border-1 w-[268px] h-[380px] border-black bg-white bg-opacity-50'>
                    <img className='w-[268px] h-[180px] rounded-tl-lg rounded-tr-lg mt-5' src={item.img} />
                    <p className='text-black text-4xl mt-4 h-[80px]'>{item.nombre}</p>
                    <p className='text-black text-3xl mt-4'>${item.precio}</p>
                    <p className='text-black text-xl mt-4'></p>


                </div>

            </Link>



        </>


    )
}

export default Item