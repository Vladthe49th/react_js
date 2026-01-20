import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../shared/api/api.js';
import { useCart } from '../features/cart/cartStore.js';
import { ShoppingCart } from 'lucide-react';

export function ProductPage() {
  const { id } = useParams(); // Бере id з URL
  const navigate = useNavigate();
  const { addItem } = useCart();

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await api.get(`/products/${id}`);
      return res.data;
    },
    retry: false, // Не ретраїти, щоб не крашити
  });

  const handleAddToCart = () => {
    if (!product) return;
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    alert(`${product.title} додано в кошик! 🛒`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  if (isLoading) {
    return <div className="text-center text-3xl py-20">Завантажуємо товар...</div>;
  }

  if (isError || !product) {
    return (
      <div className="text-center text-3xl py-20">
        Товар не знайдено 😢<br />
        <a href="/catalog" className="text-primary underline text-xl mt-8 block">Повернутися до каталогу</a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Велике фото */}
        <div>
          <img
            src={product.image || '/assets/placeholder.jpg'} // fallback якщо немає фото
            alt={product.title}
            className="w-full rounded-xl shadow-lg object-cover max-h-96"
          />
        </div>

        {/* Інфо + кнопки */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-primary">{product.price.toLocaleString()} ₴</span>
            <span className="text-xl">⭐ {product.rating || '4.8'}</span>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            {product.description || 'Опис з чорним гумором скоро з\'явиться 😈'}
          </p>

          <div className="flex gap-4 mb-12">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-white py-4 rounded-lg text-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-6 h-6" />
              Додати в кошик
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-accent text-white py-4 rounded-lg text-xl font-semibold hover:bg-green-600 transition"
            >
              Купити зараз
            </button>
          </div>

          {/* Заглушка відгуків */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Відгуки</h2>
            <p className="text-gray-600">Відгуки скоро з'являться. А поки — купуй на свій страх і ризик 😈</p>
          </div>
        </div>
      </div>
    </div>
  );
}