import React from 'react';
import { Card, CardText } from 'reactstrap';

const Langues = () => {



        return (
                <>
                        <br />
                        <Card body  style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: "1px solid #3c3e4b", borderRadius: "15px"  }}>
                                <h2 className="titres" style={{ color: "#ffff" }}><b>Langues</b></h2>

                                <CardText className="text-left"><br /><b>Anglais</b> technique<br /><br /><b>Espagnol</b> Scolaire</CardText>
                        </Card>
                </>
        )
}
export default Langues;