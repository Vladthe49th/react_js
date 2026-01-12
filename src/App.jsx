import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFact = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch('https://catfact.ninja/fact');
            if (!response.ok) throw new Error('Failed to fetch fact');

            const data = await response.json();
            setFact(data.fact);
        } catch {
            setError('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFact();
    }, []);

    return (
        <div className="app">
            <div className="card">
                <h1>Cat Fact: </h1>

                {loading && <p className="status">Loading...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && !error && <p className="fact">{fact}</p>}

                <button onClick={fetchFact} disabled={loading}>
                    New fact
                </button>
            </div>
        </div>
    );
}

export default App;
