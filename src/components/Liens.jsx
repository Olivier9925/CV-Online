import React from 'react';
import { Button } from 'reactstrap';
import linkedin from "../assets/linkedin.png"
import cv from "../assets/cv.png"
import git from "../assets/git.png"

const Liens = () => {


        const styleButton = {
                backgroundColor: "#2eae71",
                border: "#3c3e4b solid 1px",
                margin: "5px 5px",
                width: "130px",
                borderRadius: '20px',
                background : 'transparent'
        };
        const styleCard = {
                margin: '15px 5px 0 5px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'stretch',
                alignContent: 'stretch'

        };

        return (

                <div style={styleCard}>

                        <a href="http://bit.ly/2WSe3dS" ><Button color="danger" style={styleButton} ><img src={linkedin} className="styleIcon" alt="linkedin Logo"/>LinkedIn</Button></a>
                        <a href="http://bit.ly/2WRwGyY" ><Button color="danger" style={styleButton} ><img src={git} className="styleIcon" alt="git logo" />GitHub</Button></a>
                        <a href="http://olivier.allard-jacquin.com/CV.pdf" ><Button color="danger" style={styleButton} ><img src={cv} className="styleIcon" alt="cv logo" />CV</Button></a>

                </div>
        )
}
export default Liens;