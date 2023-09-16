import React from 'react';

const NotFoundComponent = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='mt-30'>
            {/* <h1 className='text-xl'>Opps! page not found</h1>  */}
           <img className='w-500 h-50 mt-9' src='https://cdn.dribbble.com/users/707244/screenshots/5086963/anushka.jpg' alt='404'/>
            </div>
        </div>
    );
};

export default NotFoundComponent;