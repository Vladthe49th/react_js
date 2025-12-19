
import { useState } from "react";

export function ProductActions({ price, rating }) {
    const [isAdded, setIsAdded] = useState(false);

    function handleAddToCart() {
        setIsAdded(!isAdded);
    }

    return (
        <div className="product-actions">
            <div className="info">
                <span className="price">{price} ₴</span>
                <span className="rating"> {rating}</span>
            </div>

            <button
                className={isAdded ? "btn added" : "btn"}
                onClick={handleAddToCart}
            >
                {isAdded ? "В кошику" : "Додати в кошик"}
            </button>
        </div>
    );
}
