import { createBrowserRouter, redirect } from 'react-router-dom';
import { Layout } from '../widgets/Layout/Layout';


import { HomePage } from '../pages/HomePage/HomePage.jsx';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage.jsx';
import { ProductPage } from '../pages/ProductPage/ProductPage.jsx';
import { CartPage } from '../pages/CartPage/CartPage.jsx';
import { CheckoutPage } from '../pages/CheckoutPage/CheckoutPage.jsx';
import { AdminDashboard } from '../pages/AdminDashboard/AdminDashBoard.jsx';


const isAdmin = () => true;

const adminLoader = () => {
    if (!isAdmin()) {
        return redirect('/');
    }
    return null;
};

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/catalog', element: <CatalogPage /> },
            { path: '/product/:id', element: <ProductPage /> }, // loader додамо пізніше
            { path: '/cart', element: <CartPage /> },
            { path: '/checkout', element: <CheckoutPage /> },
            {
                path: '/admin/*',
                element: <AdminDashboard />,
                loader: adminLoader,
            },
            {
                path: '*',
                element: <div className="text-center text-2xl">404 — Сторінку не знайдено</div>,
            },
        ],
    },
]);