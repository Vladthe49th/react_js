import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-auto w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Turbomagazik</h3>
                        <p className="text-gray-400">Закидаємо вас годнотою!</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Корисне</h4>
                        <ul className="space-y-1 text-gray-400">
                            <li><Link to="/admin" className="hover:text-white">Адмін-панель</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Контакти</h4>
                        <p className="text-gray-400">Email: info@turbomagazik.com</p>
                        <p className="text-gray-400">Тел: +380 (99) 123-45-67</p>
                        <p className="text-gray-400 mt-4 text-xs">© 2026 Turbomagazik. Всі права захищено трупом адміна.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}