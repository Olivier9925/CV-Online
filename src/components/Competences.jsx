import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Competences = () =>
{

        return (
                <>
                        <br />
                        <Card body style={{ background: 'Linear-gradient(#ee121e,#f0334e)', color: '#FFFFFF', border: "0px", borderRadius: "15px" }} >
                                <h2 className="titres" style={{ color: "#FFFFFF" }}><b>Compétences</b></h2>
                                <CardTitle className="text-left"><b>Développement</b></CardTitle>
                                <CardText className="text-left">HTML / CSS / JS <br />
                                        React.js (Hooks/Context/Redux)<br />
                                        Node (Express)<br />
                                        SQL<br />
                                        PHP<br />
                                        Git<br />
                                        AGILE/SCRUM<br />
                                        Hébergement</CardText>

                                <CardTitle className="text-left"><b>Informatique</b></CardTitle>
                                <CardText className="text-left">Diagnostique de panne<br />
                                        Réseaux et systèmes réseau<br />
                                        Windows, MacOS & Linux<br />
                                        Suite Adobe (Ps, Lr, Pr, Id)<br /></CardText>
                        </Card>
                        <br />


                        <Card body style={{ border: "0px", borderRadius: "15px", background: 'Linear-gradient(#ffffff,#ffffff)' }}>
                                <h2 className="titres" style={{ color: "red" }}><b>Soft Skills</b></h2>
                                <CardText className="text-left" style={{ color: "#333333" }}>
                                        Persévérance<br />
                                        Esprit d’équipe<br />
                                        Sens du service<br />
                                        Communication<br /></CardText>
                        </Card>
                </>
        )
}
export default Competences;