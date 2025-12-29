import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, initialState } from "./cartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(
        cartReducer,
        initialState,
        (init) => {
            const stored = localStorage.getItem("cart");
            return stored ? JSON.parse(stored) : init;
        }
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);

    const value = {
        ...state,
        dispatch,
        addToCart: (product) =>
            dispatch({ type: "ADD", payload: product }),
        increment: (id) =>
            dispatch({ type: "INCREMENT", payload: id }),
        decrement: (id) =>
            dispatch({ type: "DECREMENT", payload: id }),
        removeFromCart: (id) =>
            dispatch({ type: "REMOVE", payload: id }),
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
