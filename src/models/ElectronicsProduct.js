
import { Product } from "./Product";

export class ElectronicsProduct extends Product {
    constructor(props) {
        super(props);
        this.warranty = props.warranty;
        this.brand = props.brand;
    }

    getWarrantyInfo() {
        return `Гарантія: ${this.warranty} місяців`;
    }
}
