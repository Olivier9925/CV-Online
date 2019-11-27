import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import photoOAJ from '../assets/OAJ.jpeg'

const NavigationBar = (props) => {

        const styleBar = {
                backgroundColor: "transparent",
                border: "transparent solid 1px",
                borderRadius: '5px',
                margin: "10px 0px",
                color: "#FFFFFF",
        }
        const stylePhoto = {
                width: "150px",
                borderRadius: '50%',
                border: "3px solid #ff1800"
        }

        return (

                <Jumbotron style={styleBar} fluid>
                        <Container fluid>
                                <img src={photoOAJ} style={stylePhoto} alt="photoOAJ" /><br /><br />
                                <h1 style={{ fontSize: "25px" }}>Olivier <b>ALLARD-JACQUIN</b></h1>
                                <p className="lead" style={{ color: "#FFFFFF", fontSize: "15px" }}>Développeur Web FullStack, JS, <b>React</b>, Node (junior)</p>
                        </Container>
                </Jumbotron>
        )
}
export default NavigationBar;