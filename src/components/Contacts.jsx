import React from "react";
import { Card, CardText, Badge } from 'reactstrap';
import Liens from './Liens'
import BGcontact from '../assets/BG_contact.png'

const Contacts = (props) => {

        const cardStyle = {
                border: "0px",
                borderRadius: "15px",
                backgroundImage: `url(${BGcontact})`,
                backgroundSize: '400px',
                boxShadow: '0px 0px 10px -1px rgba(0,0,0,0.67)',
                height: '300px'
        }


        return (
                <>
                        <br />


                        <Card body fluid style={cardStyle} >
                                <h2 className="titres" style={{ color: "#333333" }}><b>Contact</b></h2>
                                <CardText className="text-left">
                                        <br />
                                        <b>Zone : </b>Lyon & sa banlieue<br /><br />
                                        <b>Permis B</b> + véhicule<br /><br />
                                        <b>tel :</b> (+33)6 22 85 98 12<br /><br />
                                        <b>mail :</b> : olivier@allard-jacquin.com
                                </CardText>

                        </Card>
                </>
        )
}
export default Contacts;