import { ProductCard } from "./store-components/products/ProductCard";
import pastaImg from "./assets/pasta.png";

function App() {
    return (
        <div style={{ padding: "40px" }}>
            <ProductCard
                title="Pasta Italiano"
                price={89}
                category="Food from the great Italy"
                rating={4.6}
                description="Макарони з твердих сортів пшениці, зіграють на струнах вашого шлунку"
                headerColor="Green"
                image={pastaImg}
            />
        </div>
    );
}

export default App;
