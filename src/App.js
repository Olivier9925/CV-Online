import React from 'react';
import './App.css';
import './components/styles.css';
import NavigationBar from './components/NavigationBar';
import Experiences from './components/Experiences';
import Contacts from './components/Contacts';
import Competences from './components/Competences';
import { Container, Row, Col } from 'reactstrap';
import Formation from './components/Formation';
import Langues from './components/Langues';
import Liens from './components/Liens';
import Profil from './components/Profil';
import Meteo from './components/Meteo';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';

function App() {

  return (

    <div className={"App"}>
      <Container>
        <Row>
          <Col><NavigationBar /></Col>
        </Row>
        <Row>

        </Row>
        <Row>
          <Col xs="12" md="4">
            <Row>
              <Col >
                <Contacts />
              </Col>
            </Row>
            <Row>
              <Col>
                <Liens />
              </Col>
            </Row>
            <Row>
              <Col>
                <Competences />
              </Col>
            </Row>
            <Row>
              <Col>
                <ContactForm />
              </Col>
            </Row>
          </Col>
          <Col xs="12" md="8">
            <Profil />
            <Experiences />
            <Row>
              <Col xs="12" md="8">
                <Formation />
              </Col>
              <Col xs="12" md="4">
                <Langues />
                <Meteo />
              </Col>
            </Row>
          </Col>
        </Row>
        {/*  <Row>
          <Col fluid>
            <Portfolio />
          </Col>
        </Row> */}

        <br /> <br /> <br />
      </Container>
    </div>


  );
}

export default App;
