import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/productService";
import { fetchCategories } from "../services/categoryService";
import { Link, useSearchParams } from "react-router-dom";

export function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category");

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: ({ signal }) => fetchCategories(signal),
    });

    const { data: products, isLoading } = useQuery({
        queryKey: ["products", selectedCategory],
        queryFn: ({ signal }) =>
            fetchProducts(signal).then(items =>
                selectedCategory
                    ? items.filter(p => p.category === selectedCategory)
                    : items
            ),
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="flex gap-6">
            {/* Categories */}
            <aside className="w-1/4">
                <h2 className="font-bold mb-2">Categories</h2>

                <ul className="space-y-2">
                    <li>
                        <button onClick={() => setSearchParams({})}>
                            All
                        </button>
                    </li>

                    {categories?.map(cat => (
                        <li key={cat}>
                            <button
                                className={cat === selectedCategory ? "font-bold" : ""}
                                onClick={() => setSearchParams({ category: cat })}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Products */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                {products.map(product => (
                    <div key={product.id} className="border p-4">
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>

                        <Link
                            to={`/product/${product.id}`}
                            className="text-blue-600 underline"
                        >
                            View
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
}
