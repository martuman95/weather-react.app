
import './App.css';
import SearchEngine from './SearchEngine';

function App() {
  return (
  <div className="App">
      <div className="container">
        <div className="card outside">
          <div className="card-body">
        <h1>
          Weather App
        </h1>
        <SearchEngine />
        </div>
    </div>
</div>

 <footer>
   <a href="https://github.com/martuman95/weather-react.app" > Open Source Code </a> by <a href="https://www.instagram.com/martugram_/?hl=it"> Marta Manunta </a>
 </footer>
 </div>
);
}

export default App;
