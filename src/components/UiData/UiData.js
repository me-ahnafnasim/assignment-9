import React from "react";
import { Link } from "react-router-dom";

const UiData = ({ data }) => {
  //console.log(data)
  return (
    <div>
    <div className="mb-10">
   <div class="max-w-sm p-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
           <div class="md:shrink-0">
                    <img className="h-50 w-full object-cover md:h-full md:w-48" src={data.logo} alt="Modern building architecture"/>
                  </div>
       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <h1>{data.name}</h1>
        <h3>total: {data.total}</h3>
        </p>
        <Link to={`/contacts/${data.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Click Here
          
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>

    </div>  
    </div>

  );
};

export default UiData;
