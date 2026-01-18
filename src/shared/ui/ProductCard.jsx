import { Link } from 'react-router-dom';
import React  from 'react';

export function ProductCard({ product }) {
  const { id, title, price, image, rating } = product;

  return (
    <Link to={`/product/${id}`} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">{title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{price.toLocaleString()} ₴</span>
            <span className="text-sm text-gray-600">⭐ {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}