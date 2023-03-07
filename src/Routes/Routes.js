import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Cart from "../Pages/Cart/Cart"
import Home from "../Pages/Home/Home"

export const router = createBrowserRouter([
   {
      path:'/',
      element: <Main/>,
      children: [
         {
            path:'/',
            element: <Home/>
         },
         {
            path:'/cart',
            element: <Cart/>
         },
      ]
   },
   
])