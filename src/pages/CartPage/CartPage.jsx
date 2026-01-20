import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../features/cart/cartStore';
import { Trash2, Plus, Minus } from 'lucide-react';

export function CartPage() {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-8">Ваш кошик порожній</h1>
        <p className="text-xl mb-8">Але це легко виправити!</p>
        <Link to="/catalog" className="bg-primary text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-indigo-700 transition">
          Перейти до каталогу
        </Link>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Ваш кошик ({getTotalItems()} товарів)</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-6 p-6 border-b last:border-b-0">
            {/* Зменшене фото */}
            <img
              src={item.image || '/assets/placeholder.jpg'}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-lg shadow"
            />

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-lg text-primary font-bold">{item.price.toLocaleString()} ₴</p>
            </div>

            {/* Кількість */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-xl font-medium w-12 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Підсумок по товару */}
            <p className="text-xl font-bold w-32 text-right">
              {(item.price * item.quantity).toLocaleString()} ₴
            </p>

            {/* Видалити */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 hover:text-red-800 transition"
            >
              <Trash2 className="w-6 h-6" />
            </button>
          </div>
        ))}

        {/* Підсумок */}
        <div className="p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <p className="text-2xl font-bold">Разом:</p>
            <p className="text-3xl font-bold text-primary">{getTotalPrice().toLocaleString()} ₴</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={clearCart}
              className="flex-1 bg-gray-300 text-gray-700 py-4 rounded-lg text-xl font-semibold hover:bg-gray-400 transition"
            >
              Очистити кошик
            </button>
            <button
              onClick={handleCheckout}
              className="flex-1 bg-accent text-white py-4 rounded-lg text-xl font-semibold hover:bg-green-600 transition"
            >
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}