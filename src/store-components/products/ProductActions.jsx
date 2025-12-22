import { useState } from "react";

export function ProductActions({ price, rating }) {
    const [isAdded, setIsAdded] = useState(false);

    return (
        <div className="mt-4">
            <div className="flex justify-between items-center mb-3">
                <span className="text-gray-900 font-semibold text-lg">
                    {price} ₴
                </span>
                <span className="text-yellow-500 font-medium">
                    ⭐ {rating}
                </span>
            </div>

            <button
                onClick={() => setIsAdded(!isAdded)}
                className={`w-full py-2 rounded-lg text-white transition
                    ${isAdded ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}
                `}
            >
                {isAdded ? "В кошику" : "Додати в кошик"}
            </button>
        </div>
    );
}
