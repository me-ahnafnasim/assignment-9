import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UiData from '../UiData/UiData';


const Home = () => {
    const datum =  useLoaderData();
    
    return (
        <div className=''>
           <div>
            <img src="https://cdn.pixabay.com/photo/2015/09/14/07/47/banner-939233_1280.jpg" alt="" />
           </div>
            <div className='mt-10 '>
            <div className=' md:flex flex-row justify-center  gap-10 m-20'>
            {
            datum.data.map(data=><UiData key={data.id} data={data}></UiData>)
            //
           }
            </div>
            </div>
            
        </div>
    );
};

export default Home;
