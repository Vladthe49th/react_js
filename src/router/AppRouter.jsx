import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";

import { HomePage } from "../pages/Home";
import { CategoryPage } from "../pages/Category";
import { ProductPage } from "../pages/Product";
import { CartPage } from "../pages/Cart";
import { NotFoundPage } from "../pages/NotFoundPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { AdminPage } from "../admin/AdminPage";



export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="category/:categoryId" element={<CategoryPage />} />
                <Route path="product/:productId" element={<ProductPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="admin" element={<AdminPage />} />

            </Route>
        </Routes>
    );
}