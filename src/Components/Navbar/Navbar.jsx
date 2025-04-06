import React from 'react';
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
            <div className="navbar-start">
                <a className="btn btn-ghost text-3xl">Recipe Calories</a>
            </div>
            <div className="navbar-center">
                <ul className='flex gap-5 text-lg'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Search</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <FaUserCircle size={30} className='text-green-700' />
            </div>
            </div>
        </div>
    );
};

export default Navbar;