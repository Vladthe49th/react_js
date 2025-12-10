import "./Albums.css";

export default function Albums() {
    const albums = [
        { title: "Collide (2003)", cover: "/src/assets/collide.jpg" },
        { title: "Comatose (2006)", cover: "/src/assets/comatose.jpg" },
        { title: "Awake (2009)", cover: "/src/assets/awake.jpg" },
        { title: "Rise (2013)", cover: "/src/assets/rise.jpg" },
        { title: "Unleashed (2016)", cover: "/src/assets/unleashed.jpg" },
        { title: "Dominion (2022)", cover: "/src/assets/dominion.jpg" },
    ];

    return (
        <section className="albums">
            <h2>Ви тільки подивіться скільки альбомів</h2>

            <div className="albums-grid">
                {albums.map((a) => (
                    <div className="album-card" key={a.title}>
                        <img src={a.cover} alt={a.title} />
                        <p>{a.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
