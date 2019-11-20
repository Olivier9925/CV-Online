import React from 'react';
import { Button } from 'reactstrap';

const Liens = (props) => {


        const styleButton = {
                backgroundColor: "#2eae71",
                border: "#1a6a44 solid 1px",
                margin: "5px 5px",
                width: "100px"
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
                        <a href="http://bit.ly/2WSe3dS" target="_blank"><Button color="danger" style={styleButton} >LinkedIn</Button></a>
                        <a href="http://bit.ly/2WRwGyY" target="_blank"><Button color="danger" style={styleButton} >GitHub</Button></a>
                        <a href="http://olivier.allard-jacquin.com/CV.pdf" target="_blank"><Button color="danger" style={styleButton} >CV</Button></a>

                </div>
        )
}
export default Liens;