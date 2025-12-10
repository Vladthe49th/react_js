import "./Gallery.css";

export default function Gallery() {
    const photos = [
        "/src/assets/photo1.jpg",
        "/src/assets/photo2.jpg",
        "/src/assets/photo3.jpg",
        "/src/assets/photo4.jpg",
        "/src/assets/photo5.jpg",
    ];

    return (
        <section className="gallery">
            <h2>Фотки скілетиків</h2>

            <div className="gallery-grid">
                {photos.map((src, i) => (
                    <img src={src} key={i} alt={`Skillet ${i}`} />
                ))}
            </div>
        </section>
    );
}
