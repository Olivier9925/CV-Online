import React, { Component } from 'react'
import { Button, Input } from 'reactstrap'

class ContactForm extends Component
{
      constructor(props)
      {
            super(props)
            this.state = {
                  message: ' ',
                  email: ' ',
            }

            this.onChange = this.onChange.bind(this)
            this.submitForm = this.submitForm.bind(this)
      }

      submitForm(e)
      {
            e.preventDefault()

            const config = {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(this.state),
            }

            //console.log(config)

            const url = 'http://127.0.0.1:3001/api/message'

            fetch(url, config)
                  .then(res => res.json())
                  .then(res =>
                  {
                        if (res.error) {
                              alert(res.error)
                        } else {
                              alert(`ajouté avec l'ID ${res}!`)
                        }
                  })
                  .catch(e =>
                  {
                        console.error(e)
                        //alert('Erreur ??')
                  })
      }
      onChange(e)
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
                        <form onSubmit={this.submitForm}>
                              <label htmlFor="title">Name</label>
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
                  </div>
            )
      }
}

export default ContactForm
