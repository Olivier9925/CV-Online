import React from "react";
import { Card, CardText } from "reactstrap";

const Profil = () =>
{
  return (
    <>
      <br />
      <Card
        body

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
