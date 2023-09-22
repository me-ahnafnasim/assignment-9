import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='mt-30'>
           
           <img className='w-500 h-50 mt-9' src='https://cdn.dribbble.com/users/707244/screenshots/5086963/anushka.jpg' alt='404'/>
            </div>
            <div className='border-solid border-red-500'>
            <Link  to='/'>
            
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Take Me Home</button>
            </Link>
            </div>
        </div>
    );
};

export default NotFoundComponent;
