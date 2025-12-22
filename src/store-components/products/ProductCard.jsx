import { ProductHeader } from "./ProductHeader";
import { ProductActions } from "./ProductActions";

export function ProductCard({
                                title,
                                category,
                                headerColor,
                                description,
                                price,
                                rating,
                                image
                            }) {
    return (
        <div className="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <ProductHeader
                title={title}
                category={category}
                headerColor={headerColor}
            />

            <div className="h-44 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                    {description}
                </p>

                <ProductActions
                    price={price}
                    rating={rating}
                />
            </div>
        </div>
    );
}
