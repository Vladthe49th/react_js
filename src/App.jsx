import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'
import Biography from './pages/Biography'
import Masterpiece from './pages/Masterpiece'
import Gallery from './pages/Gallery'
import Header from './components/Header'

function App() {
    const location = useLocation()

    return (
        <>
            <Header />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/biography" element={<Biography />} />
                    <Route path="/masterpiece" element={<Masterpiece />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
