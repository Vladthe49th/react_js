export default class Cart {
    constructor(items = []) {
        this.items = items; // [{ product, quantity }]
    }

    addProduct(product, quantity = 1) {
        const existing = this.items.find(
            (item) => item.product.id === product.id
        );

        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeProduct(productId) {
        this.items = this.items.filter(
            (item) => item.product.id !== productId
        );
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(
            (item) => item.product.id === productId
        );

        if (!item) return;

        if (quantity <= 0) {
            this.removeProduct(productId);
        } else {
            item.quantity = quantity;
        }
    }

    clear() {
        this.items = [];
    }

    getTotalCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce(
            (sum, item) =>
                sum + item.product.getFinalPrice() * item.quantity,
            0
        );
    }
}
