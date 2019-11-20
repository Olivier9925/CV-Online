import React from 'react';
import { Card, Container, CardTitle, CardText } from 'reactstrap';

const Competences = (props) => {



        return (
                <>
                        <h2>Compétences</h2>
                        <Card body className="text-left" fluid>
                                <CardTitle><b>Développement</b></CardTitle>
                                <CardText>HTML / CSS / JS <br />
                                        React.js (Hooks/Context/Redux)<br />
                                        Node (Express)<br />
                                        SQL<br />
                                        PHP<br />
                                        Git<br />
                                        AGILE/SCRUM<br />
                                        Hébergement</CardText>

                                <CardTitle><b>Informatique</b></CardTitle>
                                <CardText>Diagnostique de panne<br />
                                        Réseaux et systèmes réseau<br />
                                        Windows, MacOS & Linux<br />
                                        Suite Adobe (Ps, Lr, Pr, Id)<br /></CardText>
                        </Card>
                </>
        )
}
export default Competences;