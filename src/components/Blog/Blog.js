import React from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {
    
    return (
        <div>
            
    <div className='py-10 '>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
               <div className="md:flex">
                  <div class="md:shrink-0">
                    <img className="h-50 w-full object-cover md:h-full md:w-48" src="https://miro.medium.com/v2/resize:fit:509/1*gbCeTzc727LZNhGQPXIkHA.png" alt="Modern building architecture"/>
                  </div>
                    <div className="p-8">
                    
                    <Link href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">what is the perpose of react-router?</Link>
                   <p class="mt-2 text-slate-500">React Router is a popular library in the React ecosystem 
                   that provides dynamic routing capabilities to single-page applications (SPAs). It addresses
                    the need for navigation and URL management within React applications, enabling developers to 
                    create more sophisticated and user-friendly web experiences.
                    
                    </p>
            
                    </div>
               </div>
            </div>
            <div className="my-20 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
               <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-50 w-full object-cover md:h-full md:w-48" src="https://i0.wp.com/reactjsguru.com/wp-content/uploads/2022/08/Screenshot-524.webp?resize=471%2C462&ssl=1" alt="Modern building architecture"/>
                  </div>
                    <div className="p-8">
                
                    <Link href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">How does context api works?</Link>
                   <p class="mt-2 text-slate-500">The Context API in React provides a way to share state between components without passing
                    props explicitly through every level of the component tree. It works by creating a centralized context object that holds 
                    the state, which can be accessed by components nested within a `Provider` component. Components that need the shared state 
                    can access it through a `Consumer` component or by using the `useContext` hook. This helps simplify state management, 
                    making it more efficient and avoiding prop drilling. Context API enhances code readability and maintainability by enabling
                     components to access and update shared state seamlessly.
            .</p>
            
                    </div>
               </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
               <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-50 w-full object-cover md:h-full md:w-48" src="https://vabadus.es/images/cache/imagen_nodo/images/articulos/63ec88289b8aa596176172.png" alt="Modern building architecture"/>
                  </div>
                    <div className="p-8">
                    
                    <Link href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">What is useref hook?</Link>
                   <p class="mt-2 text-slate-500">The `useRef` hook in React is a built-in function that provides a way to interact with the DOM and manage references to 
            elements or values in a functional component. Unlike `useState`, it doesn't trigger re-renders when its value changes. 
            Instead, it maintains a stable reference across renders. `useRef` is commonly used to access and manipulate DOM elements, 
            create instance variables that persist across renders, or store mutable values without causing re-renders. It's particularly
             useful for scenarios where direct interaction with the DOM is required, or when you need to store values that don't affect 
             the component's rendering.</p>
            
                    </div>
               </div>
            </div>
     </div>
     </div>

      )
      }      


export default Blog;




