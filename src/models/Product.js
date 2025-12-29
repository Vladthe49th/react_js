export class Product {
    constructor({ id, title, price, categoryId, image, description }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.categoryId = categoryId;
        this.image = image;
        this.description = description;
    }

    getFormattedPrice() {
        return `${this.price} ₴`;
    }
}
