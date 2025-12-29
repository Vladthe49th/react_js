export const adminInitialState = {
    products: [],
    loading: false,
    error: null,
};

export function adminReducer(state, action) {
    switch (action.type) {

        case "LOAD_START":
            return { ...state, loading: true, error: null };

        case "LOAD_SUCCESS":
            return { ...state, loading: false, products: action.payload };

        case "LOAD_ERROR":
            return { ...state, loading: false, error: action.payload };

        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
            };

        case "REMOVE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    p => p.id !== action.payload
                ),
            };

        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: state.products.map(p =>
                    p.id === action.payload.id ? action.payload : p
                ),
            };

        default:
            return state;
    }
}