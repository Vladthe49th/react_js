import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCart } from '../../features/cart/cartStore';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const schema = z.object({
  email: z.string().email('Невірний email'),
  username: z.string().min(2, 'Ім\'я занадто коротке'),
  phone: z.string().min(10, 'Невірний телефон'),
  delivery: z.enum(['nova', 'ukr', 'self']),
  payment: z.enum(['card', 'cash']),
  promo: z.string().optional(),
});

export function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [discount, setDiscount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    if (data.promo?.toLowerCase() === 'maslina') {
      setDiscount(0.1); // 10% знижки
      alert('Промокод "Maslina" активовано! -10% ');
    }
    setSuccess(true);
    clearCart(); // Очищаємо кошик
  };

  const total = getTotalPrice() * (1 - discount);

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-8">Кошик порожній</h1>
        <Link to="/cart" className="text-primary text-xl underline">Повернутися до кошика</Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-8">Замовлення оформлено! 🎉</h1>
        <p className="text-2xl mb-4">Номер замовлення: #{Math.floor(Math.random() * 10000)}</p>
        <p className="text-xl mb-8">Дякуємо за покупку в Turbomagazik!</p>
        <Link to="/" className="bg-primary text-white px-8 py-4 rounded-lg text-xl font-semibold">
          На головну
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Оформлення замовлення</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Товари */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Ваші товари</h2>
          <div className="bg-white rounded-xl shadow-md">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border-b">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.quantity} x {item.price.toLocaleString()} ₴</p>
                </div>
                <p className="font-bold">{(item.price * item.quantity).toLocaleString()} ₴</p>
              </div>
            ))}
            <div className="p-4 text-right text-2xl font-bold">
              Разом: {total.toLocaleString()} ₴ {discount > 0 && <span className="text-green-600">(-10% з промокодом)</span>}
            </div>
          </div>
        </div>

        {/* Форма */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Дані покупця</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-md p-8">
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Email</label>
              <input {...register('email')} className="w-full px-4 py-3 border rounded-lg" placeholder="you@example.com" />
              {errors.email && <p className="text-red-600 mt-2">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Ім'я</label>
              <input {...register('username')} className="w-full px-4 py-3 border rounded-lg" placeholder="Іван Сосонькін" />
              {errors.username && <p className="text-red-600 mt-2">{errors.username.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Телефон</label>
              <input {...register('phone')} className="w-full px-4 py-3 border rounded-lg" placeholder="+380..." />
              {errors.phone && <p className="text-red-600 mt-2">{errors.phone.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Промокод</label>
              <input {...register('promo')} className="w-full px-4 py-3 border rounded-lg" placeholder="Maslina" />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Доставка</label>
              <div className="space-y-2">
                <label><input type="radio" {...register('delivery')} value="nova" /> Нова Пошта</label><br />
                <label><input type="radio" {...register('delivery')} value="ukr" /> Укрпошта</label><br />
                <label><input type="radio" {...register('delivery')} value="self" /> Самовивіз</label>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-lg font-medium mb-2">Оплата</label>
              <div className="space-y-2">
                <label><input type="radio" {...register('payment')} value="card" /> Карткою онлайн</label><br />
                <label><input type="radio" {...register('payment')} value="cash" /> Готівкою при отриманні</label>
              </div>
            </div>

            <button type="submit" className="w-full bg-accent text-white py-4 rounded-lg text-2xl font-bold hover:bg-green-600 transition">
              Оформити замовлення
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}