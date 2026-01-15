const features = [
    { title: 'Швидка доставка', text: 'Отримуй товар за 1–2 дні - наші доставники не знають спокою' },
    { title: 'Гарантія якості', text: 'Тільки бренди, що подобаються адміністратору!' },
    { title: 'Підтримка 24/7', text: 'Ми завжди за 30 км від тебе!' },
];

export default function HomeFeatures() {
    return (
        <section className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
                <div
                    key={f.title}
                    className="border rounded-xl p-6 hover:shadow-lg transition"
                >
                    <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                    <p className="text-gray-600">{f.text}</p>
                </div>
            ))}
        </section>
    );
}
