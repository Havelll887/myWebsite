import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from "./interface";

// import Home from "@/views/home/index"
// import Home from "@/views/home/index"
import MyLayout from "@/components/myLayout/index"
import Test from '@/views/hello/index';

console.log('@@@@@')
export const routerArray: RouteObject[] = [];

export const rootRouter: RouteObject[] = [
    {
        path: "/",
        element: <MyLayout />,
        children: [
            {
                path: "/test",
                element: <Test />,
                meta: {
                    title: "路由测试页面",
                },
            }
        ]
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