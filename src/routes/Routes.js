import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

// Authentication
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// Pages
const HomePages = Loadable(lazy(() => import('pages/home')));
const Products = Loadable(lazy(() => import('pages/product')));
const Module1 = Loadable(lazy(() => import('pages/module1')));
const Module2 = Loadable(lazy(() => import('pages/module2')));
const Module3 = Loadable(lazy(() => import('pages/module3')));
const ModuleN = Loadable(lazy(() => import('pages/moduleN')));
const Child1 = Loadable(lazy(() => import('pages/child1')));
const Child2 = Loadable(lazy(() => import('pages/child2')));
const Child3 = Loadable(lazy(() => import('pages/child3')));

const routes = (token) => [
    {
        path: '/',
        element: token ? <MainLayout /> : <Navigate to="/login" />,
        children: [
            {
                path: 'app/dashboard',
                element: <HomePages />
            },
            {
                path: 'app/dashboard',
                children: [
                    {
                        path: 'default',
                        element: <HomePages />
                    }
                ]
            },
            {
                path: 'app/product',
                element: <Products />
            },
            {
                path: 'app/module1',
                element: <Module1 />
            },
            {
                path: 'app/module2',
                element: <Module2 />
            },
            {
                path: 'app/module3',
                element: <Module3 />
            },
            {
                path: 'app/moduleN',
                element: <ModuleN />
            }
        ]
    },
    {
        path: '/',
        element: !token ? <MinimalLayout /> : <Navigate to="/app/dashboard" />,
        children: [
            {
                path: 'login',
                element: <AuthLogin />
            },
            {
                path: 'register',
                element: <AuthRegister />
            }
        ]
    }
];

export default routes;
