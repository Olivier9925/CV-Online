import React from 'react';
import { Card, Container, CardTitle, CardText } from 'reactstrap';

const Formation = (props) => {



        return (
                <>
                        <br />
                        <h2>Formation</h2>
                        <Card body className="text-left" fluid style={{ backgroundColor: '#505151', color: '#FFFFFF', border: "0px", borderRadius: "15px" }}>
                                <CardTitle><b>Developpeur Web & Mobile,</b></CardTitle>
                                <CardText>Wild Code School, Lyon2<br />
                                        Formation de développeur Web et Mobile</CardText>
                        </Card>
                        <br />
                        <Card body className="text-left" fluid style={{ backgroundColor: '#505151', color: '#FFFFFF', border: "0px", borderRadius: "15px" }}>
                                <CardTitle><b>BTS IRIS</b></CardTitle>
                                <CardText>Lycée Edouard Branly, Lyon5<br />
                                        Informatique et Réseaux pour l’Industrie et Les Services techniques</CardText>
                        </Card>
                </>
        )
}
export default Formation;