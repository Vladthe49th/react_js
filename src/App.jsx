import { useState, useEffect } from "react";
import Header from "./sow_components/Header";
import GameTitle from "./sow_components/GameTitle";
import GameDetails from "./sow_components/GameDetails";
import UniqueFeatures from "./sow_components/UniqueFeatures";
import Characters from "./sow_components/Characters";
import Poster from "./sow_components/Poster";
import Footer from "./sow_components/Footer";
import talionImg from "./assets/talion.jpg";
import celebrimborImg from "./assets/celebrimbor.jpg";
import sauronImg from "./assets/sauron.jpg";


function App() {
    const [game, setGame] = useState(null);

    useEffect(() => {
        // Імітація завантаження даних
        setTimeout(() => {
            setGame({
                title: "Middle-Earth: Shadow of War",
                developer: "Monolith Productions",
                genre: "Action RPG",
                year: 2017,
                characters: [
                    {
                        name: "Talion",
                        role: "The Undead Ranger of Gondor",
                        image: talionImg
                    },
                    {
                        name: "Celebrimbor",
                        role: "Elf Craftsman/Bright Lord",
                        image: celebrimborImg
                    },
                    {
                        name: "Sauron",
                        role: "The Dark Lord of the Rings",
                        image: sauronImg
                    }
                ],

                features: [
                    "Nemesis System that allows you to make a unique story with each enemy",
                    "Open World of Middle-Earth with countless regions and fortresses",
                    "Each orc has a unique personality - almost none is like the other"
                ]
            });
        }, 1000);
    }, []);

    if (!game) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <GameTitle title={game.title} />
            <Poster />
            <GameDetails
                developer={game.developer}
                genre={game.genre}
                year={game.year}
            />
            <UniqueFeatures features={game.features} />
            <Characters characters={game.characters} />
            <Footer />
        </>
    );
}

export default App;
