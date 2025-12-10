import "./Members.css";

export default function Members() {
    const members = [
        {
            name: "Джон Купер",
            role: "Вокал, бас-гітара",
            photo: "/src/assets/john.jpg"
        },
        {
            name: "Корі Купер",
            role: "Клавіші, ритм-гітара, бек-вокал",
            photo: "/src/assets/korey.jpg"
        },
        {
            name: "Джен Леджер",
            role: "Барабани, вокал",
            photo: "/src/assets/jen.jpg"
        },
        {
            name: "Сет Моррісон",
            role: "Соло-гітара",
            photo: "/src/assets/seth.jpg"
        }
    ];

    return (
        <section className="members">
            <h2>Коматозні монстрики</h2>

            <div className="members-list">
                {members.map((m) => (
                    <div className="member-card" key={m.name}>
                        <img src={m.photo} alt={m.name} />
                        <h3>{m.name}</h3>
                        <p>{m.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
