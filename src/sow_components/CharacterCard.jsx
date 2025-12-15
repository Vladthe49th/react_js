function CharacterCard({ name, role, image }) {
    return (
        <div className="character-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}

export default CharacterCard;
