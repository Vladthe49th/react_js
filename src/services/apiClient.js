const BASE_URL = "https://fakestoreapi.com";

export async function apiFetch(endpoint, options = {}) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("API fetch failed:", error);
        throw error;
    }
}