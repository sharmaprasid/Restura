
import React from 'react';
import { BsFillCartFill } from "react-icons/bs"
import Logo from './Logo';

const leftLinks = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Our Story', url: '/ourstory' },
    { id: 3, title: 'Menu', url: '/menu' },
    { id: 4, title: 'Orders', url: '/orders' },
    { id: 5, url: '/carts', icon: <BsFillCartFill /> },
];
const Navbar = () => {
    return (
        <nav className="bg-white top-0 py-4 shadow-md sticky z-10">
            <div className="container mx-auto flex items-center justify-around">
                {/* Logo */}
                <Logo />



                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    {leftLinks.map(({ id, title, url, icon }) => (

                        <a href={url} key={id} className="text-gray-700 hover:text-gray-900">{icon}{title}</a>

                    ))}
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
