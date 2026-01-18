import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 py-8 w-full">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}