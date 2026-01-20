import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../shared/ui/ProductCard';
import { useProducts } from '../../features/products/useProducts';
import { useCategories } from '../../features/categories/useCategories';

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: { data: products = [], total = 0 } = {}, isLoading } = useProducts();
  const { data: categories = [] } = useCategories();

  const currentPage = Number(searchParams.get('page') || '1');
  const totalPages = Math.ceil(total / 8);

  const handlePageChange = (page) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Сайдбар */}
      <aside className="lg:col-span-1">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Категорії</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setSearchParams({})}
                className="text-lg hover:text-primary"
              >
                Всі товари
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setSearchParams({ category: cat.slug })}
                  className="text-lg hover:text-primary"
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Фільтр ціни (простий слайдер пізніше, зараз інпути) */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Ціна</h3>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Від"
                className="w-full px-4 py-2 border rounded-lg"
                onChange={(e) => setSearchParams({ ...Object.fromEntries(searchParams), minPrice: e.target.value })}
              />
              <input
                type="number"
                placeholder="До"
                className="w-full px-4 py-2 border rounded-lg"
                onChange={(e) => setSearchParams({ ...Object.fromEntries(searchParams), maxPrice: e.target.value })}
              />
            </div>
          </div>

          {/* Сортування */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Сортування</h3>
            <select
              className="w-full px-4 py-2 border rounded-lg"
              onChange={(e) => setSearchParams({ ...Object.fromEntries(searchParams), sort: e.target.value })}
            >
              <option value="popularity">За популярністю</option>
              <option value="price-asc">Ціна: низька → висока</option>
              <option value="price-desc">Ціна: висока → низька</option>
              <option value="rating">За рейтингом</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Грід товарів */}
      <div className="lg:col-span-3">
        {isLoading ? (
          <p className="text-center text-2xl">Завантажуємо товари...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Пагінація */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-4 mt-12">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}