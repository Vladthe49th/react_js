import CharacterCard from "./CharacterCard";

function Characters({ characters }) {
    return (
        <section>
            <h2>Main Characters</h2>
            <div className="characters-grid">
                {characters.map((char, index) => (
                    <CharacterCard key={index} {...char} />
                ))}
            </div>
        </section>
    );
}

export default Characters;
