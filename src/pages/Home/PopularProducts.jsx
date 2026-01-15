import { useProducts } from '../../features/products/useProducts';
import { Link } from 'react-router-dom';

export default function PopularProducts() {
    const { data, isLoading, error } = useProducts();

    if (isLoading) return <p>Завантаження товарів...</p>;
    if (error) return <p>Помилка!</p>;

    return (
        <section>
            <h2 className="text-2xl font-bold mb-6">Популярні товари</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {data.slice(0, 4).map((product) => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="border rounded-xl p-4 hover:shadow-lg transition"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-40 object-contain mx-auto mb-4"
                        />
                        <h3 className="font-medium">{product.title}</h3>
                        <p className="text-indigo-600 font-bold">
                            {product.price} ₴
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
