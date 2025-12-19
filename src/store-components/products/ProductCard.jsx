
import "./ProductCard.css";
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
        <div className="product-card">
            <ProductHeader
                title={title}
                category={category}
                headerColor={headerColor}
            />

            <div className="product-image">
                <img src={image} alt={title} />
            </div>

            <div className="product-body">
                <p className="description">{description}</p>

                <ProductActions
                    price={price}
                    rating={rating}
                />
            </div>
        </div>
    );
}
