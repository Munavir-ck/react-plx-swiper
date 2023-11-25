import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 200; // Adjust this value based on when you want the color to be fully black
      const opacity = Math.min(scrollPosition / maxScroll, 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarColor = `rgba(0, 0, 0, ${scrollOpacity})`;

  return (
    <nav
      className="fixed w-full py-4 transition-all"
      style={{ backgroundColor: navbarColor, zIndex: 1000 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-white text-lg font-bold">
            Logo
          </a>
        </div>
        <div className="lg:hidden">
     
        </div>
        <div className="lg:flex lg:items-center lg:w-auto">
          <ul className="text-white lg:flex items-center">
            <li className="mb-2 lg:mb-0 lg:ml-6">
              <a href="#" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li className="mb-2 lg:mb-0 lg:ml-6">
              <a href="#" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li className="mb-2 lg:mb-0 lg:ml-6">
              <a href="#" className="hover:text-gray-600">
                Services
              </a>
            </li>
            <li className="mb-2 lg:mb-0 lg:ml-6">
              <a href="#" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


