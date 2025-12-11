import IngredientItem from "./IngredientItem";

export default function IngredientsList() {
    return (
        <div>
            <h3>Інгредієнти</h3>
            <ul>
                <IngredientItem name="Картопля" amount="600 г" />
                <IngredientItem name="Огірки" amount="5 шт" />
                <IngredientItem name="Листик чогось" amount="3 шт" />
                <IngredientItem name="Котлетки!" amount="скільки захочете" />
                <IngredientItem name="Сіль" amount="за смаком" />
            </ul>
        </div>
    );
}
