import React from "react";
import { Card, CardText, Container } from 'reactstrap';
import Liens from './Liens'

const Contacts = (props) => {

        return (
                <>
                        <h2>Contact</h2>
                        <Card body className="text-left" fluid>
                                <CardText>
                                        12/12/1983 (35 ans) <br />
                                        1 rue du Michon, 69670, Vaugneray<br />
                                        Permis B + véhicule<br />
                                        Tel : (+33)6 22 85 98 12<br />
                                        mail : olivier@allard-jacquin.com
                                </CardText>
                                <Liens />
                        </Card>
                </>
        )
}
export default Contacts;