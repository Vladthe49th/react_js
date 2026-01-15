import { useQuery } from '@tanstack/react-query';
import { productsApi } from '../../services/products.api';

export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: ({ signal }) => productsApi.getAll({ signal }),
        staleTime: 1000 * 60 * 5, // 5 хвилин кешу
    });
}


export function useProduct(productId) {
    return useQuery({
        queryKey: ['product', productId],
        queryFn: ({signal}) =>
            productsApi.getById(productId, {signal}),
        enabled: !!productId,
    });
}