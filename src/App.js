
import './App.css';
import SearchEngine from './SearchEngine';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
  <Row>
    <Col>
    <div className="App">
        <h1>
          Weather App
        </h1>
        <SearchEngine />
    </div>
    </Col>
  </Row>
</Container>
  );
}

export default App;
