import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
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
        ]
    }
])
export default myRouter