import React from "react";
import { Card, Container, CardTitle, CardText } from "reactstrap";

const Profil = props => {
  return (
    <>
      <br />
      <Card
        body
        fluid
        style={{
          backgroundColor: "transparent",
          color: "#FFFFFF",
          border: "0px solid #3c3e4b",
          borderRadius: "15px"
        }}
      >
        <CardText className="text-left">
          Après avoir travaillé durant une quinzaine d’années dans le support
          informatique, je souhaite mettre en avant mes compétences en
          développement Web.
        </CardText>
      </Card>
    </>
  );
};
export default Profil;
