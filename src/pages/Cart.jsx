import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";


<Link
    to="/checkout"
    className="bg-green-600 text-white px-4 py-2 inline-block mt-4"
>
    Checkout
</Link>

export function CartPage() {
    const { items, totalPrice, increment, decrement, removeFromCart } = useCart();

    if (items.length === 0) {
        return <p>Cart is empty</p>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Cart</h1>

            {items.map(item => (
                <div key={item.product.id} className="border p-4 mb-2">
                    <h2>{item.product.title}</h2>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.totalPrice}</p>

                    <div className="flex gap-2 mt-2">
                        <button onClick={() => increment(item.product.id)}>+</button>
                        <button onClick={() => decrement(item.product.id)}>-</button>
                        <button onClick={() => removeFromCart(item.product.id)}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <h2 className="mt-4 font-bold">
                Total: ${totalPrice}
            </h2>
        </div>
    );
}



