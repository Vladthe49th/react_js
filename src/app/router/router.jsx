import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../widgets/Layout/Layout';

import Home from '../../pages/Home/Home';
import Category from '../../pages/Category/Category';
import Product from '../../pages/Product/Product';
import Cart from '../../pages/Cart/Cart';
import Checkout from '../../pages/Checkout/Checkout';
import Admin from '../../pages/Admin/Admin';
import NotFound from '../../pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: 'category/:categoryId', element: <Category /> },
            { path: 'product/:productId', element: <Product /> },
            { path: 'cart', element: <Cart /> },
            { path: 'checkout', element: <Checkout /> },
            { path: 'admin', element: <Admin /> },
        ],
    },
]);

export default router;
