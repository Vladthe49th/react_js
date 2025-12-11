import photo from "/src/assets/kotletki.jpg";

export default function RecipeImage() {
    return (
        <div>
            <h3>Ти подивись!</h3>
            <img src={photo} width="300" alt="Котлетки з пюрешкой" />
        </div>
    );
}
