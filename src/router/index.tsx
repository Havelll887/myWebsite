import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from "./interface";

import Home from "../views/home/index"

export const routerArray: RouteObject[] = [];

export const rootRouter: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <Navigate to="/404" />
    }
]
const Router = () => {
    const routes = useRoutes(rootRouter);
    return routes;
};


export default Router;