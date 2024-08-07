import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import routes from "./routes";
import Homepage from "../views/Homepage";
import Menu from "../views/Menu";
import Detail from "../views/Detail";



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
                path:routes.detail,
                element: <Detail />,
                 
            },
        ],
        
    },




])


export default router;