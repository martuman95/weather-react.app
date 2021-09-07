
import './App.css';
import SearchEngine from './SearchEngine';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
        <h1>
          Weather App
        </h1>
        <Weather />
        <SearchEngine />
    </div>
  );
}

export default App;
