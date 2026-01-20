import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/api';
import { useSearchParams } from 'react-router-dom';

export function useProducts() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const sort = searchParams.get('sort') || 'popularity';

  let url = '/products';
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (minPrice) params.append('price_gte', minPrice);
  if (maxPrice) params.append('price_lte', maxPrice);

  // Сортування (json-server підтримує _sort і _order)
  switch (sort) {
    case 'price-asc':
      params.append('_sort', 'price');
      params.append('_order', 'asc');
      break;
    case 'price-desc':
      params.append('_sort', 'price');
      params.append('_order', 'desc');
      break;
    case 'rating':
      params.append('_sort', 'rating');
      params.append('_order', 'desc');
      break;
    default:
      // popularity — за рейтингом або id
      params.append('_sort', 'rating');
      params.append('_order', 'desc');
  }

  params.append('_page', searchParams.get('page') || '1');
  params.append('_limit', '8'); // 8 на сторінці

  if (params.toString()) url += `?${params.toString()}`;

  return useQuery({
    queryKey: ['products', { category, minPrice, maxPrice, sort, page: searchParams.get('page') }],
    queryFn: () => api.get(url).then((res) => ({
      data: res.data,
      total: Number(res.headers['x-total-count'] || res.data.length),
    })),
  });
}