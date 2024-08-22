import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import routes from "./routes";
import Homepage from "../views/Homepage";
import Menu from "../views/Menu";

import Login from "../views/Login";
import CheckOut from "../views/CheckOut";



const router = createBrowserRouter([

    {
        path:'/',
        element: <Layout />,
        children: [
            
            {
                path:routes.home,
                element: <Homepage />,
                // loader: postsLoader 
            },
            {
                path:routes.menu,
                element: <Menu />,
                // loader: postsLoader 
            },
            {
                path:routes.login,
                element: <Login />,
                 
            },
            {
                path:routes.checkOut,
                element: <CheckOut />,
                 
            },
        ],
        
    },




])


export default router;