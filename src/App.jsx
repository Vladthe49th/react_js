import { useRef, useState, Fragment } from "react";

import Header from "./components/Header/Header.jsx";
import DishTitle from "./components/DishTitle/DishTitle.jsx";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo.jsx";
import IngredientsList from "./components/Ingredients/Ingredients.jsx";
import StepsList from "./components/StepsList/StepsList.jsx";
import RecipeModal from "./components/RecipeModal/RecipeModal.jsx";
import RecipeImage from "./components/RecipeImage/RecipeImage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HintPortal from "./components/HintPortal/HintPortal.jsx";

export default function App() {
    const hintButtonRef = useRef(null);
    const [isHintOpen, setIsHintOpen] = useState(false);

    function openHint() {
        setIsHintOpen(true);
    }

    function closeHint() {
        setIsHintOpen(false);
        hintButtonRef.current?.focus();
    }

    return (
        <div className="container">
            <Header />

            <DishTitle title="Котлєти з пюрешкой" />

            <RecipeInfo />

            <IngredientsList />

            <StepsList />


            <Fragment>
                <button
                    ref={hintButtonRef}
                    onClick={openHint}
                    className="modal-btn"
                >
                    Кулінарна підказка
                </button>

                <HintPortal isOpen={isHintOpen} onClose={closeHint} />
            </Fragment>


            <RecipeModal />

            <RecipeImage />

            <Footer />
        </div>
    );
}
