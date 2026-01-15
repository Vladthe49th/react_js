export default class Product {
    constructor({
                    id,
                    title,
                    price,
                    categoryId,
                    description = '',
                    image = '',
                    discount = 0,
                    stock = 0,
                }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.categoryId = categoryId;
        this.description = description;
        this.image = image;
        this.discount = discount;
        this.stock = stock;
    }

    getFinalPrice() {
        return this.price - (this.price * this.discount) / 100;
    }

    hasDiscount() {
        return this.discount > 0;
    }

    isAvailable() {
        return this.stock > 0;
    }
}
