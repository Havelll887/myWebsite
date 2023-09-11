import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from "./interface";

import HomePage from "../views/hello/index"

export const routerArray: RouteObject[] = [];

export const rootRouter: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
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