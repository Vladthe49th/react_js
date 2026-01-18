import { Link } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../../features/cart/cartStore';

export function Header() {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-8">
                    <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                        Turbomagazik 🚀
                    </Link>

                    <div className="flex-1 max-w-2xl">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Пошук товарів..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-lg"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link
                            to="/catalog"
                            className="text-lg font-medium text-gray-700 hover:text-primary flex items-center gap-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Каталог
                        </Link>

                        <Link to="/cart" className="relative">
                            <ShoppingCart className="w-8 h-8 text-gray-700 hover:text-primary" />
                            {totalItems > 0 && (
                                <span className="absolute -top-3 -right-3 bg-accent text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}