import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap';

const Experiences = () =>
{
        return (
                <>
                        <br />
                        <h2 style={{ color: "red" }}>Expériences</h2>

                        <Card body className="text-left" style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: "1px solid #3c3e4b", borderRadius: "15px" }} >

                                <CardTitle><b>Formation Développeur web et mobile</b></CardTitle>
                                <CardText>Wild Code School | Lyon2</CardText>
                                <CardText>Réalisation de divers projets (React.js) visibles sur GitHub</CardText>
                        </Card>
                        <br />
                        <Card body className="text-left" style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: "1px solid #3c3e4b", borderRadius: "15px" }} >
                                <CardTitle><b>Technicien Informatique</b></CardTitle>
                                <CardText>Spineway | Ecully</CardText>
                                <CardText>Gestion du parc informatique (Réseau, serveurs, terminaux 50 postes)<br />
                                        Conception d’applications web telles que :<br /><br />
                                        - le site web : <a href="http://www.spineway.com" target="_blank" rel="noopener noreferrer"><font style={{ color: "white" }} >www.spineway.com</font></a><br />
                                        - supports de vente et outils clients online : www.spineway.support<br />
                                        - l’Intranet.</CardText>
                        </Card>
                        <br />
                        <Card body className="text-left" style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: "1px solid #3c3e4b", borderRadius: "15px" }} >
                                <CardTitle><b>Technicien Informatique, Gérant</b></CardTitle>
                                <CardText>Oxygene Informatique | Craponne<br /><br />
                                        Création & gestion de la SARL.<br />
                                        Dépannage, maintenance, vente de matériel informatique, formation,
                                        pour particuliers et professionnels.<br />
                                        Réalisation de sites web Wordpress.</CardText>

                        </Card>
                        <br />
                        <Card body className="text-left" style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: "1px solid #3c3e4b", borderRadius: "15px" }} >
                                <CardTitle><b>Employé commercial de nuit</b></CardTitle>
                                <CardText>E.Leclerc | Grezieu la Varenne<br /><br />
                                        Mise en rayon, préparation de commandes, organisation, gestion et
                                        implantation des foires aux vins annuelles.</CardText>

                        </Card>
                </>)
}
export default Experiences;