export const initialState = {
    items: [],
    totalPrice: 0,
};

export function cartReducer(state, action) {
    switch (action.type) {

        case "ADD": {
            const product = action.payload;
            const existing = state.items.find(
                item => item.product.id === product.id
            );

            let updatedItems;

            if (existing) {
                updatedItems = state.items.map(item =>
                    item.product.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: (item.quantity + 1) * item.product.price,
                        }
                        : item
                );
            } else {
                updatedItems = [
                    ...state.items,
                    {
                        product,
                        quantity: 1,
                        totalPrice: product.price,
                    },
                ];
            }

            return {
                items: updatedItems,
                totalPrice: calculateTotal(updatedItems),
            };
        }

        case "INCREMENT": {
            const id = action.payload;

            const updatedItems = state.items.map(item =>
                item.product.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                        totalPrice: (item.quantity + 1) * item.product.price,
                    }
                    : item
            );

            return {
                items: updatedItems,
                totalPrice: calculateTotal(updatedItems),
            };
        }

        case "DECREMENT": {
            const id = action.payload;

            const updatedItems = state.items
                .map(item =>
                    item.product.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                            totalPrice: (item.quantity - 1) * item.product.price,
                        }
                        : item
                )
                .filter(item => item.quantity > 0);

            return {
                items: updatedItems,
                totalPrice: calculateTotal(updatedItems),
            };
        }

        case "REMOVE": {
            const id = action.payload;

            const updatedItems = state.items.filter(
                item => item.product.id !== id
            );

            return {
                items: updatedItems,
                totalPrice: calculateTotal(updatedItems),
            };
        }

        case "CLEAR":
            return initialState;

        default:
            return state;
    }
}

function calculateTotal(items) {
    return items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
    );
}