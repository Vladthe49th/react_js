import { useForm } from "react-hook-form";
import { useCart } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

export function CheckoutPage() {
    const { items, totalPrice, dispatch } = useCart();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        const order = {
            customer: data,
            items,
            totalPrice,
            createdAt: new Date().toISOString(),
        };

        try {
            // mock POST
            await new Promise(res => setTimeout(res, 1000));

            console.log("ORDER SENT:", order);

            dispatch({ type: "CLEAR" });
            navigate("/");
        } catch (error) {
            alert("Order failed");
        }
    };

    if (items.length === 0) {
        return <p>Your cart is empty</p>;
    }

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Name */}
                <div>
                    <input
                        placeholder="Full name"
                        {...register("name", { required: "Name is required" })}
                        className="border p-2 w-full"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <input
                        placeholder="Email"
                        {...register("email", {
                            required: "Email required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email",
                            },
                        })}
                        className="border p-2 w-full"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                    <input
                        placeholder="Phone"
                        {...register("phone", {
                            required: "Phone required",
                            pattern: {
                                value: /^\+?\d{10,14}$/,
                                message: "Invalid phone number",
                            },
                        })}
                        className="border p-2 w-full"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>

                <button
                    disabled={isSubmitting}
                    className="bg-green-600 text-white px-4 py-2 rounded w-full"
                >
                    {isSubmitting ? "Processing..." : `Pay $${totalPrice}`}
                </button>
            </form>
        </div>
    );
}
