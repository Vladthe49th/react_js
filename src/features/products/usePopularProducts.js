import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/api';

export function usePopularProducts() {
  return useQuery({
    queryKey: ['popularProducts'],
    queryFn: () => api.get('/products?popular=true').then((res) => res.data),
  });
}