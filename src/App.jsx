import Header from "./components/Header/Header";
import BandInfo from "./components/BandInfo/BandInfo";
import Members from "./components/Members/Members";
import Albums from "./components/Albums/Albums";
import Gallery from "./components/Gallery/Gallery";
import Player from "./components/Player/Player";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <BandInfo />
            <Members />
            <Albums />
            <Gallery />
            <Player />
            <Footer />
        </>
    );
}

export default App;
