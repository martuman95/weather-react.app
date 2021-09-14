
import './App.css';
import "./Weather.css"
import Weather from './Weather';

function App() {
  return (
  <div className="App">
      <div className="container">
        <div className="card outside">
          <div className="card-body">
        <Weather defaultCity="London"/>
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
