import "./Player.css";

export default function Player() {
    return (
        <section className="player">
            <h2>Плеєр</h2>

            <div className="player-card">
                <h3>Зробіть приємно своїй слуховій системі, та послухайте Monster! </h3>

                <audio controls>
                    <source src="/src/assets/monster.mp3" type="audio/mpeg" />
                    Ваш браузер не підтримує аудіо-тег.
                </audio>
            </div>
        </section>
    );
}
