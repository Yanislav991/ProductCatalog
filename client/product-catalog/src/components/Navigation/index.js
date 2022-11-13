import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

const Navigation = () => {
    return (
        <nav className="flex items-start justify-between flex-wrap bg-teal-500 p-6">
            <NavLink to="/">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Product-Catalog</span>
                </div>
            </NavLink>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/products/all">Products</NavLink>
                    <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/products/add">Add Product</NavLink>
                </div>
            </div>
        </nav>
    )
}
export default Navigation;