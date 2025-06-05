import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import MyItems from "../Pages/MyItems/MyItems";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/login',
                Component: Login,
            },{
                path: '/register',
                Component: Register,
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/my-items',
                element: <PrivateRoute><MyItems></MyItems></PrivateRoute>
            }
        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])


export default router;