import { useState, useEffect } from 'react';

export function RandomDogPic() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!res.ok) throw new Error('Не вдалося завантажити картинку...');
        const data = await res.json();
        setImage(data.message);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDog();
  }, []); // Пусті залежності — fetch тільки при монтуванні

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Сьогоднішняшня доза собачок:</h2>
      {loading && <p className="text-xl">Завантажуємо собачку...</p>}
      {error && <p className="text-xl text-red-600">{error}</p>}
      {image && (
        <img
          src={image}
          alt="Random dog meme"
          className="max-w-full max-h-96 mx-auto rounded-lg shadow-lg"
        />
      )}
      <p className="text-gray-600 mt-4">Оновіть сторінку щоб з'явилась інша картинка!</p>
    </div>
  );
}