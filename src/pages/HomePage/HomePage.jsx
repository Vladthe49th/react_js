

import React  from 'react';

import { Link } from 'react-router-dom';
import { ProductCard } from '../shared/ui/ProductCard';
import { usePopularProducts } from '../features/products/usePopularProducts';

export function HomePage() {
  const { data: products = [], isLoading } = usePopularProducts();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 md:h-screen max-h-screen overflow-hidden">
        <img
          src="/assets/hero-banner.jpg" // Скачай велике фото магазину/техніки
          alt="Turbomagazik"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Turbomagazik 🚀
            </h1>
            <p className="text-xl md:text-3xl text-white mb-8 max-w-2xl">
              Найкращі гаджети за цінами, від яких конкуренти плачуть
            </p>
            <Link
              to="/catalog"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-600 transition"
            >
              До каталогу
            </Link>
          </div>
        </div>
      </section>

      {/* Чому ми — з чорним гумором */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Чому саме ми?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2">Гарячі ціни</h3>
              <p className="text-gray-600">Настільки низькі, що конкуренти дзвонять і благають підняти</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Швидка доставка</h3>
              <p className="text-gray-600">Швидше, ніж ти встигнеш пошкодувати про покупку</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Гарантія</h3>
              <p className="text-gray-600">Якщо зламається — ми повернемо гроші. Або ні. Але спробуємо 😈</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">Великий вибір</h3>
              <p className="text-gray-600">Все, що потрібно сучасній людині. І трохи більше зайвого</p>
            </div>
          </div>
        </div>
      </section>

      {/* Популярні товари */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Популярні товари</h2>
          {isLoading ? (
            <p className="text-center text-xl">Завантажуємо хітові товари...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-indigo-700 transition"
            >
              Переглянути весь каталог
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}