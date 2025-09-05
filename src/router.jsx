import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            }, 
            {
                path:"contact",
                element:<Contact/>
            },
             {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<LogIn/>
            }, 
              {
                path:"wishlist",
                element:<WishList/>
            },{
                path:"Cart",
                element:<Cart/>
            },
        ]
    }
])
export default myRouter