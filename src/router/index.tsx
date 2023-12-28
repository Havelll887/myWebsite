import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from "./interface";

import MyLayout from "@/components/myLayout/index"
import Home from "@/views/home/index"

export const routerArray: RouteObject[] = [];

export const rootRouter: RouteObject[] = [
    {
        path: "/",
        element: <MyLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                meta: {
                    title: "首页",
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