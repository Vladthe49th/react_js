import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/productService";
import { useCart } from "../cart/CartContext";

export function ProductPage() {
    const { productId } = useParams();
    const { addToCart } = useCart();

    const { data, isLoading, error } = useQuery({
        queryKey: ["product", productId],
        queryFn: ({ signal }) => fetchProductById(productId, signal),
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mb-2">${data.price}</p>

            <button
                onClick={() => addToCart(data)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add to cart
            </button>
        </div>
    );
}