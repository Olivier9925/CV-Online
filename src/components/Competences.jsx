import React from 'react';
import { Card, Container, CardTitle, CardText } from 'reactstrap';

const Competences = (props) => {



        return (
                <>
                        <br />
                        <Card body fluid style={{ backgroundColor: '#2eae71', color: '#FFFFFF', border: "0px", borderRadius: "15px" }} >
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


                        <Card body fluid style={{ border: "0px", borderRadius: "15px" }}>
                                <h2 className="titres" style={{ color: "#2eae71" }}><b>Soft Skills</b></h2>
                                <CardText className="text-left" style={{ color: "#333333" }}>
                                        Persévérance<br />
                                        Esprit d’équipe<br />
                                        Sens du service<br />
                                        Communication<br /></CardText>
                        </Card>
                        <br />
                        <Card body fluid style={{ backgroundColor: '#FFFFFF', color: '##333333', border: "0px", borderRadius: "15px" }} >
                                <h2 className="titres" style={{ color: "#2eae71" }}><b>Intérêts</b></h2>
                                <CardText className="text-left"><b>Sports :</b><br />
                                        Roller-Hockey depuis 20 ans<br />
                                        entraîneur (5 ans)<br />
                                        le ski, la randonnée.<br /><br />
                                        <b>Autres :</b><br />
                                        photographie,<br />
                                        vidéo & montage vidéo<br /></CardText>
                        </Card>
                </>
        )
}
export default Competences;