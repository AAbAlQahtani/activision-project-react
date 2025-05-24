import Layout from '../component/Layout';
import About from '../pages/About';
import Careers from '../pages/Careers';
import Support from '../pages/Support';
import Home from '../pages/Home';
import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";







const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "About", element: <About /> },
            { path: "careers", element: <Careers /> },
            { path: "support", element: <Support /> },
        ],
  },
]);





function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router