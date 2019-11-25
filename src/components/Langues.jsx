import React from 'react';
import { Card, Container, CardTitle, CardText } from 'reactstrap';

const Langues = (props) => {



        return (
                <>
                        <br />
                        <Card body fluid style={{ border: "0px", borderRadius: "15px" }}>
                                <h2 className="titres" style={{ color: "#2eae71" }}><b>Langues</b></h2>

                                <CardText className="text-left"><b>Anglais</b> technique<br /><b>Espagnol</b> Scolaire</CardText>
                        </Card>
                </>
        )
}
export default Langues;