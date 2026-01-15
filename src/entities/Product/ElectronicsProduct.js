import Product from './Product';

export default class ElectronicsProduct extends Product {
    constructor(props) {
        super(props);
        this.warrantyMonths = props.warrantyMonths || 12;
        this.brand = props.brand || 'Unknown';
    }

    hasWarranty() {
        return this.warrantyMonths > 0;
    }
}
