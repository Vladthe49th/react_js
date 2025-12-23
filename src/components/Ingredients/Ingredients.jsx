import IngredientItem from "./IngredientItem";

export default function IngredientsList() {
    return (
        <>
            <h3>Інгредієнти</h3>
            <ul>
                <IngredientItem name="Картопля" amount="600 г" />
                <IngredientItem name="Фарш" amount="400 г" />
                <IngredientItem name="Цибуля" amount="1 шт" />
            </ul>
        </>
    );
}
