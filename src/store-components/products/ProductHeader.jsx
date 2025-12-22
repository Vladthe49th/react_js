export function ProductHeader({ title, category, headerColor }) {
    return (
        <div
            className="px-4 py-3 text-white"
            style={{ backgroundColor: headerColor }}
        >
            <h2 className="text-lg font-semibold">{title}</h2>
            <span className="text-sm opacity-90">{category}</span>
        </div>
    );
}
