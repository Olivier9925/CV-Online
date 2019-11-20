import React from "react";
import { Card, CardTitle, CardText, Container } from 'reactstrap';

const Experiences = (props) => {
        return (
                <>
                        <br />
                        <h2>Expériences</h2>
                        <Card body className="text-left">
                                <CardTitle><b>Formation Développeur web et mobile</b></CardTitle>
                                <CardText>Wild Code School | Lyon2</CardText>
                                <CardText>Réalisation de divers projets (React.js) visibles sur GitHub</CardText>
                        </Card>
                        <br />
                        <Card body className="text-left">
                                <CardTitle><b>Technicien Informatique</b></CardTitle>
                                <CardText>Spineway | Ecully</CardText>
                                <CardText>Gestion du parc informatique (Réseau, serveurs, terminaux 50 postes)<br />
                                        Conception d’applications web telles que :<br /><br />
                                        - le site web : www.spineway.com<br />
                                        - supports de vente et outils clients online : www.spineway.support<br />
                                        - l’Intranet.</CardText>
                        </Card>
                        <br />
                        <Card body className="text-left">
                                <CardTitle><b>Technicien Informatique, Gérant</b></CardTitle>
                                <CardText>Oxygene Informatique | Craponne<br /><br />
                                        Création & gestion de la SARL.<br />
                                        Dépannage, maintenance, vente de matériel informatique, formation,
                                        pour particuliers et professionnels.<br />
                                        Réalisation de sites web Wordpress.</CardText>

                        </Card>
                        <br />
                        <Card body className="text-left">
                                <CardTitle><b>Employé commercial de nuit</b></CardTitle>
                                <CardText>E.Leclerc | Grezieu la Varenne<br /><br />
                                        Mise en rayon, préparation de commandes, organisation, gestion et
                                        implantation des foires aux vins annuelles.</CardText>

                        </Card>
                </>)
}
export default Experiences;