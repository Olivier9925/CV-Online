import React, { Component } from 'react'
import { Button, Input, Card } from 'reactstrap'
import axios from 'axios'

class ContactForm extends Component
{
      constructor(props)
      {
            super(props)
            this.state = {
                  message: ' ',
                  email: ' ',
            }

      }

      submitForm = (e) =>
      {
            e.preventDefault()


            axios({
                  method: 'post',
                  url: 'http://127.0.0.1:3001/api/message',
                  data: this.state
            })
                  .then(function (reponse)
                  {
                        //On traite la suite une fois la réponse obtenue 
                        //console.log(reponse);
                  })
                  .catch(function (erreur)
                  {
                        //On traite ici les erreurs éventuellement survenues
                        console.log(erreur);
                  });
      }
      onChange = (e) =>
      {
            this.setState({
                  [e.target.name]: e.target.value,
            })
            //console.log(JSON.stringify(this.state));
      }
      render()
      {

            return (
                  <div>
                        <br />
                        <Card body style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: "1px solid #3c3e4b", borderRadius: "15px" }}>

                              <form onSubmit={this.submitForm}>
                                    <h2 className="titres" style={{ color: "red" }}><b>Message</b></h2>
                                    <br />
                                    <Input
                                          type="text"
                                          id="email"
                                          name="email"
                                          onChange={this.onChange}
                                          placeholder="eMail"
                                    />
                                    <br />
                                    <Input
                                          type="text"
                                          id="message"
                                          name="message"
                                          onChange={this.onChange}
                                          placeholder="message"
                                    />
                                    <br />
                                    <Button type="submit" color="danger">
                                          Envoyer
                              </Button>
                              </form>
                        </Card>

                  </div>
            )
      }
}

export default ContactForm
