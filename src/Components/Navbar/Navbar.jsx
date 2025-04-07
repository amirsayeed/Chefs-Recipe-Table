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
                {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                <label className="input w-60 md:w-auto">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                <input type="search" required placeholder="Search" />
                </label>
                <FaUserCircle size={30} className='text-green-700' />
            </div>
            </div>
        </div>
    );
};

export default Navbar;