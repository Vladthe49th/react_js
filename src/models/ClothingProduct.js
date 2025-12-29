import { Product } from "./Product";

export class ClothingProduct extends Product {
    constructor(props) {
        super(props);
        this.size = props.size;
        this.material = props.material;
    }

    getSizeLabel() {
        return `Розмір: ${this.size}`;
    }
}