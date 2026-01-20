import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/api';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => api.get('/categories').then((res) => res.data),
  });
}