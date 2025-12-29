import { apiFetch } from "./apiClient";
import { Category } from "../models/Category";

const API_URL = "https://fakestoreapi.com";

export async function getAllCategories() {
    const data = await apiFetch("/products/categories");

    return data.map(
        (name, index) =>
            new Category({
                id: index + 1,
                name,
                slug: name.replace(/\s+/g, "-").toLowerCase(),
            })
    );
}

export async function fetchCategories(signal) {
    const response = await fetch(`${API_URL}/products/categories`, { signal });

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return response.json();
}
