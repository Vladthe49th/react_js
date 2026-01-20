import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/api';

export function usePopularProducts() {
  return useQuery({
    queryKey: ['popularProducts'],
    queryFn: () => api.get('/products?_limit=4&_sort=rating&_order=desc').then((res) => res.data),
  });
}