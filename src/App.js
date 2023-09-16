import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import NotFoundComponent from './components/notfound/NotFoundComponent';
//import { Route } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, children:[
       {
        path:'/',
         loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>
       },
       {
        path: "/contacts/:contactId",
        loader:async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.contactId}`)
          },
         element: <Quiz></Quiz>
        
       },
       {
        path:'topics',
        element:<Topics></Topics>
       },

       {
        path:'Statistics',
        element:<Statistics></Statistics>
       },


       {
        path:'blog',
        element:<Blog></Blog>
       },

       {
        path:'*',
        element:<NotFoundComponent></NotFoundComponent>
       }, 
      
      ]
     
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
