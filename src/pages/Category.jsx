import { useParams } from "react-router-dom";

export function CategoryPage() {
    const { categoryId } = useParams();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Category: {categoryId}
            </h1>
        </div>
    );
}