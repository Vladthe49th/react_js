import { createBrowserRouter, redirect } from 'react-router-dom';
import { Layout } from '../widgets/Layout/Layout';

import { HomePage } from '../pages/HomePage/HomePage.jsx';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage.jsx';
import { ProductPage } from '../pages/ProductPage.jsx';
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

// Простий global error без Link (a href замість)
const globalErrorElement = (
  <div className="text-center text-3xl text-red-600 py-20">
    Щось пішло не так 😢<br />
    <a href="/" className="text-primary underline text-xl mt-8 block">Повернутися на головну</a>
  </div>
);

// Простий error для товару
const productErrorElement = (
  <div className="text-center text-3xl py-20">
    Товар не знайдено 😢<br />
    <a href="/catalog" className="text-primary underline text-xl mt-8 block">Повернутися до каталогу</a>
  </div>
);

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: globalErrorElement,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/catalog', element: <CatalogPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/product/:id', element: <ProductPage / > },
      {
        path: '/admin/*',
        element: <AdminDashboard />,
        loader: adminLoader,
      },
      {
        path: '*',
        element: <div className="text-center text-3xl py-20">404 — Сторінку не знайдено 😢</div>,
      },
    ],
  },
]);