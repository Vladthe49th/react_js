
export function ProductHeader({ title, category, headerColor }) {
    return (
        <div
            className="product-header"
            style={{ backgroundColor: headerColor }}
        >
            <h2>{title}</h2>
            <span className="category">{category}</span>
        </div>
    );
}
