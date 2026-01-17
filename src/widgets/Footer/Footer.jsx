export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Turbomagazik</h3>
                        <p className="text-gray-400">Найкращі товари та ціни - 200%!</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Посилання</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-white">Головна</a></li>
                            <li><a href="/catalog" className="hover:text-white">Каталог</a></li>
                            <li><a href="/cart" className="hover:text-white">Кошик</a></li>
                            <li><a href="/admin" className="hover:text-white">Адмінка</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Контакти</h4>
                        <p className="text-gray-400">Email: info@turbomagazik.com</p>
                        <p className="text-gray-400">Тел: +380 (99) 123-45-67</p>
                        <p className="text-gray-400 mt-4">© 2026 Turbomagazik. Всі права захищено трупом адміна.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}