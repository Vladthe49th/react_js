export function AdminProducts({ products, dispatch }) {

    const addProduct = () => {
        const newProduct = {
            id: Date.now(),
            title: "New product",
            price: 0,
        };

        dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    };

    return (
        <div>
            <button
                onClick={addProduct}
                className="bg-blue-600 text-white px-4 py-2 mb-4"
            >
                Add product
            </button>

            {products.map(product => (
                <div
                    key={product.id}
                    className="border p-2 mb-2 flex justify-between"
                >
                    <span>{product.title} — ${product.price}</span>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "REMOVE_PRODUCT",
                                payload: product.id,
                            })
                        }
                        className="text-red-600"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}