import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from '../../features/cart/cartStore';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/api';

export function Header() {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => api.get('/categories').then((res) => res.data),
    });

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-8">
                    <Link to="/" className="text-2xl font-bold text-primary">
                        Turbomagazik
                    </Link>

                    <div className="flex-1 max-w-lg">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Пошук товарів..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-gray-700 hover:text-primary">
                                <Menu className="w-5 h-5" />
                                <span>Категорії</span>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.id}
                                        to={`/catalog?category=${cat.slug}`}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link to="/cart" className="relative">
                            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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