const API_URL = "https://fakestoreapi.com";

export async function fetchProducts(signal) {
    try {
        const response = await fetch(`${API_URL}/products`, { signal });

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return await response.json();
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Request aborted");
        }
        throw error;
    }
}

export async function fetchProductById(id, signal) {
    const response = await fetch(`${API_URL}/products/${id}`, { signal });

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    return response.json();
}