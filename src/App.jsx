import Header from "./components/Header/Header.jsx";
import DishTitle from "./components/DishTitle/DishTitle.jsx";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo.jsx";
import IngredientsList from "./components/Ingredients/Ingredients.jsx";
import StepsList from "./components/StepsList/StepsList.jsx";
import RecipeImage from "./components/RecipeImage/RecipeImage.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
    return (
        <div className="container">
            <Header />
            <DishTitle title="Котлєти з пюрешкой" />
            <RecipeInfo />

            <IngredientsList />

            <StepsList />

            <RecipeImage />

            <Footer />
        </div>
    );
}
