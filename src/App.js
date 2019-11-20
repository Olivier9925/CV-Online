import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Experiences from './components/Experiences';
import Contacts from './components/Contacts';
import Competences from './components/Competences';
import { Container, Row, Col } from 'reactstrap';

function App() {

  return (


    <Container className="App">
      <Row>
        <Col><NavigationBar /></Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Row>
            <Col>
              <Contacts />
            </Col>
          </Row>
          <Row>
            <Col>
              <Competences />
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="8"><Experiences /></Col>
      </Row>

    </Container>



  );
}

export default App;
