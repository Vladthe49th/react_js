function GameDetails({ developer, genre, year }) {
    return (
        <div>
            <p><strong>Developer:</strong> {developer}</p>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Release Year:</strong> {year}</p>
        </div>
    );
}

export default GameDetails;
