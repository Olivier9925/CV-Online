import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import photoOAJ from '../assets/OAJ.png'

const NavigationBar = (props) => {

        const styleBar = {
                backgroundColor: "#2eae71",
                border: "#1a6a44 solid 1px",
                borderRadius: '5px',
                margin: "10px 0px",
                color: "#FFFFFF"
        }
        const stylePhoto = {
                width: "100px",
                borderRadius: '50%',
                border: "solid #2eae71 2px"
        }

        return (

                <Jumbotron style={styleBar} fluid>
                        <Container fluid>
                                <img src={photoOAJ} style={stylePhoto} />
                                <h1 className="display-3">Olivier ALLARD-JACQUIN</h1>
                                <p className="lead">Développeur Web FullStack, JS, React, Node (junior)</p>
                        </Container>
                </Jumbotron>
        )
}
export default NavigationBar;