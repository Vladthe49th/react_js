import { httpRequest } from './http';

export const productsApi = {
    getAll: ({ signal }) =>
        httpRequest('/products', { signal }),

    getById: (id, { signal }) =>
        httpRequest(`/products/${id}`, { signal }),

    getByCategory: (categoryId, { signal }) =>
        httpRequest(`/categories/${categoryId}/products`, { signal }),
};
