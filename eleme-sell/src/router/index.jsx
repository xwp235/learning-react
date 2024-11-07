import React, {lazy, Suspense} from 'react'
import {createBrowserRouter, Navigate} from 'react-router-dom'
import App from '../App'
import Loading from '../components/Loading'

const Goods = lazy(() => import('../components/Goods'))
const Ratings = lazy(() => import('../components/Ratings'))
const Seller = lazy(() => import('../components/Seller'))

// react-router-dom文档 https://reactrouter.com/en/main/start/tutorial
export const router = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/goods" replace/>
            },
            {
                path: '/goods',
                element: <Suspense fallback={<Loading/>}>
                             <Goods/>
                         </Suspense>
            },
            {
                path: '/ratings',
                element: <Suspense fallback={<Loading/>}>
                    <Ratings/>
                </Suspense>
            },
            {
                path: '/seller',
                element: <Suspense fallback={<Loading/>}>
                    <Seller/>
                </Suspense>
            }
    ]
    }
]

export default createBrowserRouter(router)
