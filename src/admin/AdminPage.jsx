import { useEffect, useReducer } from "react";
import { adminReducer, adminInitialState } from "./adminReducer";
import { fetchAdminProducts } from "../services/adminService";
import { AdminProducts } from "./AdminProducts";

export function AdminPage() {
    const [state, dispatch] = useReducer(adminReducer, adminInitialState);

    useEffect(() => {
        dispatch({ type: "LOAD_START" });

        fetchAdminProducts()
            .then(data =>
                dispatch({ type: "LOAD_SUCCESS", payload: data })
            )
            .catch(err =>
                dispatch({ type: "LOAD_ERROR", payload: err.message })
            );
    }, []);

    if (state.loading) return <p>Loading admin...</p>;
    if (state.error) return <p>Error: {state.error}</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <AdminProducts
                products={state.products}
                dispatch={dispatch}
            />
        </div>
    );
}