import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

const Formation = () => {
      return (
            <>
                  <br />
                  <h2 style={{ color: 'red' }}>Formation</h2>
                  <Card
                        body
                        className="text-left"
                        fluid
                        style={{
                              backgroundColor: 'transparent',
                              color: '#FFFFFF',
                              border: '1px solid red',
                              borderRadius: '15px',
                        }}
                  >
                        <CardTitle>
                              <b>Développeur Web & Mobile,</b>
                        </CardTitle>
                        <CardText>
                              Wild Code School | Lyon2
                              <br />
                              <br />
                              Formation de développeur Web et Mobile
                        </CardText>
                  </Card>
                  <br />
                  <Card
                        body
                        className="text-left"
                        fluid
                        style={{
                              backgroundColor: 'transparent',
                              color: '#FFFFFF',
                              border: '1px solid red',
                              borderRadius: '15px',
                        }}
                  >
                        <CardTitle>
                              <b>BTS IRIS</b>
                        </CardTitle>
                        <CardText>
                              Lycée Edouard Branly | Lyon5
                              <br />
                              <br />
                              Informatique et Réseaux pour l’Industrie et Les
                              Services techniques
                        </CardText>
                  </Card>
            </>
      )
}
export default Formation
