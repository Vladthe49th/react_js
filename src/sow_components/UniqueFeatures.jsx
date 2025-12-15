function UniqueFeatures({ features }) {
    return (
        <section>
            <h2>What Makes the Game Unique?</h2>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </section>
    );
}

export default UniqueFeatures;
