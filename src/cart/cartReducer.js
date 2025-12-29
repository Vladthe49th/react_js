import { CartItem } from "../models/CartItem";
import { CartActionTypes } from "./cartActions";

export function cartReducer(state, action) {
    switch (action.type) {
        case CartActionTypes.ADD: {
            const existingItem = state.items.find(
                item => item.product.id === action.product.id
            );

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product.id === action.product.id
                            ? new CartItem(item.product, item.quantity + 1)
                            : item
                    ),
                };
            }

            return {
                ...state,
                items: [...state.items, new CartItem(action.product)],
            };
        }

        case CartActionTypes.REMOVE:
            return {
                ...state,
                items: state.items.filter(
                    item => item.product.id !== action.productId
                ),
            };

        case CartActionTypes.INCREMENT:
            return {
                ...state,
                items: state.items.map(item =>
                    item.product.id === action.productId
                        ? new CartItem(item.product, item.quantity + 1)
                        : item
                ),
            };

        case CartActionTypes.DECREMENT:
            return {
                ...state,
                items: state.items
                    .map(item =>
                        item.product.id === action.productId
                            ? new CartItem(item.product, item.quantity - 1)
                            : item
                    )
                    .filter(item => item.quantity > 0),
            };

        case CartActionTypes.CLEAR:
            return { items: [] };

        default:
            return state;
    }
}