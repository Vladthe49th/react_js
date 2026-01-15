export default class Order {
    constructor({ id, items, customer, createdAt = new Date() }) {
        this.id = id;
        this.items = items;
        this.customer = customer;
        this.createdAt = createdAt;
    }

    getTotalPrice() {
        return this.items.reduce(
            (sum, item) =>
                sum + item.product.getFinalPrice() * item.quantity,
            0
        );
    }

    getSummary() {
        return {
            id: this.id,
            total: this.getTotalPrice(),
            date: this.createdAt,
            customer: this.customer,
        };
    }
}
