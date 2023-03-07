import { useState } from 'react';
import { Axios } from 'axios';
import './App.css';

function App() {
    const [joke, setJoke] = useState('');

    const getJoke = async () => {
        const response = await Axios.get(
            'https://api.chucknorris.io/jokes/random'
        );
        setJoke(response.data.value);
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Press the button for a joke...</h1>
                <button className='App-button' onClick={getJoke}>
                    Click Me!
                </button>
                <p className='App-card'>{joke}</p>
            </header>
        </div>
    );
}

export default App;
