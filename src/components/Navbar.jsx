import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(location.pathname.slice(1) || 'home');

    return (
        <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-100 to-emerald-200 shadow-md py-1 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="w-25 h-25">
                    <img src="Logo.png" alt="" />
                </div>
                <nav className="space-x-6">
                    <Link
                        to="/"
                        className={`text-lg font-medium transition-colors duration-200
                            ${activeSection === 'home' 
                                ? 'text-green-800 border-b-2 border-green-800' 
                                : 'text-green-700 hover:text-green-900'}`}
                        onClick={() => setActiveSection('home')}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`text-lg font-medium transition-colors duration-200
                            ${activeSection === 'about' 
                                ? 'text-green-800 border-b-2 border-green-800' 
                                : 'text-green-700 hover:text-green-900'}`}
                        onClick={() => setActiveSection('about')}
                    >
                        About
                    </Link>
                    <Link
                        to="/team"
                        className={`text-lg font-medium transition-colors duration-200
                            ${activeSection === 'team' 
                                ? 'text-green-800 border-b-2 border-green-800' 
                                : 'text-green-700 hover:text-green-900'}`}
                        onClick={() => setActiveSection('team')}
                    >
                        Team
                    </Link>
                </nav>
                <div className="w-20 h-20">
                    <img src="https://alumni.mait.ac.in/images/MAIT/Mait_Logo.png" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;