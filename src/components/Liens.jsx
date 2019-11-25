import React from 'react';
import { Button } from 'reactstrap';
import linkedin from "../assets/linkedin.png"
import cv from "../assets/cv.png"
import git from "../assets/git.png"

const Liens = (props) => {


        const styleButton = {
                backgroundColor: "#2eae71",
                border: "#1a6a44 solid 0px",
                margin: "5px 5px",
                width: "180px",
                borderRadius: '20px'
        }
        const styleCard = {
                margin: '0px 5px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'stretch',
                alignContent: 'stretch'
        }



        return (
                <div style={styleCard}>
                        <a href="http://bit.ly/2WSe3dS" target="_blank"><Button color="danger" style={styleButton} ><img src={linkedin} className="styleIcon" />LinkedIn</Button></a>
                        <a href="http://bit.ly/2WRwGyY" target="_blank"><Button color="danger" style={styleButton} ><img src={git} className="styleIcon" />GitHub</Button></a>
                        <a href="http://olivier.allard-jacquin.com/CV.pdf" target="_blank"><Button color="danger" style={styleButton} ><img src={cv} className="styleIcon" />CV</Button></a>

                </div>
        )
}
export default Liens;