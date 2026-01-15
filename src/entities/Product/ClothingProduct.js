import Product from './Product';

export default class ClothingProduct extends Product {
    constructor(props) {
        super(props);
        this.size = props.size || 'M';
        this.material = props.material || 'cotton';
    }

    isSizeAvailable(size) {
        return this.size === size;
    }
}
