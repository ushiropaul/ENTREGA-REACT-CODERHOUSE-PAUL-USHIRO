import React from 'react';
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className=' bg-opacity-75 stroke-1 flex flex-row justify-between w-scream h-40'>

            <div className="flex flex-col ml-28 mt-6 lg:ml-36 xl:ml-56 2xl:ml-64">
                <Link to='/' className='flex flex-row justify-between'>
                    <h1 className="font-bebas text-black text-4xl">TECH PLACE</h1>

                </Link>

                <ul className='flex justify-between mt-3 ml-1 '>
                    <li>
                        <Link to='/' className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-4' >Todos</Link>
                    </li>
                    <li>
                        <Link to='/category/consoles' className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-4' >Consolas</Link>
                    </li>
                    <li>
                        <Link to='/category/phones' className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-4' >Teléfonos</Link>
                    </li>
                    <li>
                        <Link to='/category/laptops' className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-4' >Laptops</Link>
                    </li>
                    <li>
                        <Link to='/category/periferics' className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-4' >Perifèricos</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col mr-28 mt-4 lg:mr-36 xl:mr-56 2xl:mr-64">
                <div className='flex flex-row mb-4 mt-2' >
                    <Link to='/cart' className='text-current ' ><CartWidget /></Link>
                </div>
            </div>
        </nav>


    );
}

export default NavBar;
