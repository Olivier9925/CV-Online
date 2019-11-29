import React, { Component } from 'react'
import { Button, Input, Card } from 'reactstrap'
import axios from 'axios'

class ContactForm extends Component
{
      constructor(props)
      {
            super(props)
            this.state = {
                  message: 'Message',
                  email: 'eMail ',
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
            this.setState({ message: "Message", email: "eMail" })
            alert('Merci')
      }
      onChange = (e) =>
      {
            this.setState({
                  [e.target.name]: e.target.value,
            })
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
                                          value={this.state.email}
                                          onChange={this.onChange}
                                          placeholder={this.state.email}
                                    />
                                    <br />
                                    <Input
                                          type="text"
                                          id="message"
                                          name="message"
                                          onChange={this.onChange}
                                          value={this.state.message}
                                          placeholder={this.state.message}
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
