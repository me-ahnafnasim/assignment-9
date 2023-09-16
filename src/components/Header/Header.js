import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 9px" }} className="flex items-center justify-between flex-wrap p-3 md:p-6 border-gray-200 dark:bg-gray-900">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <Link  to='/'>
       
        <img className='border-double border-1 white-500' src="https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-a-vector-illustration-depicting-the-mascot-of-a-bald-eagle-with-a-graphical-head-vector-png-image_3027085.png" className="h-8 mr-3" alt="Flowbite Logo" />
        </Link>
       
        </div>
        <div className="block lg:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={` text-white fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={` text-white fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm  lg:flex-grow">
            <Link to='/' className=" hover:bg-sky-700  block mt-4 lg:inline-block lg:mt-0 text-white   mr-4">
            Home
            </Link>
            <Link to='/statistics' className="hover:bg-sky-700   block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            Statistics
            </Link>
            <Link to='/Blog' className="hover:bg-sky-700 block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            Blog
            </Link>
            
          </div>

        </div>
      </nav>      
        
    );
};

export default Header;


