import { useEffect, useState } from "react";
import { ProductCard } from "./store-components/products/ProductCard";
import pastaImg from "./assets/pasta.png";

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
    }, [theme]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center
                        bg-gray-100 dark:bg-gray-900 transition-colors">

            <button
                onClick={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                }
                className="mb-6 px-4 py-2 rounded-lg
                           bg-gray-800 text-white
                           dark:bg-gray-200 dark:text-gray-900
                           transition"
            >
                {theme === "light" ? " Dark mode" : "Light mode"}
            </button>

            <ProductCard
                title="Pasta Italiano"
                price={89}
                category="Grocery"
                rating={4.6}
                description="Макарони з твердих сортів пшениці, що зіграють на струнках вашого шлунку"
                headerColor="#f59e0b"
                image={pastaImg}
            />
        </div>
    );
}

export default App;
