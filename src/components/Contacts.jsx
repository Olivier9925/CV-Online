import React from "react";
import { Card, CardText, Badge } from 'reactstrap';
import Liens from './Liens'

const Contacts = (props) => {

        return (
                <>
                        <br />


                        <Card body fluid style={{ border: "0px", borderRadius: "15px" }}>
                                <h2 className="titres" style={{ color: "#2eae71" }}><b>Contact</b></h2>
                                <CardText className="text-left" style={{ color: "#333333" }}>
                                        <br />
                                        <b>Zone : </b>Lyon & sa banlieue<br />
                                        <b>Permis B</b> + véhicule<br />
                                        <b>tel :</b> (+33)6 22 85 98 12<br />
                                        <b>mail :</b> : olivier@allard-jacquin.com
                                </CardText>
                                <Liens />
                        </Card>
                </>
        )
}
export default Contacts;