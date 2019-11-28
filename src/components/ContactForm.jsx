import React, { Component } from 'react';



class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "no name"
        }
    }

    submitForm(e) {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        };

        const url = "../back/index.js";

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`ajouté avec l'ID ${res}!`);
                }
            })
            .catch(e => {
                console.error(e);
                alert("Erreur");
            });
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        //console.log(JSON.stringify(this.state));
    }
    render() {
        const styleForm = {
            position: "absolute",
            border: "solid 2px #ABABAB",
            borderRadius: "10px",
            padding: "15px",
            width: "500px",
            margin: "20px"
        };
        const styleInput = {
            width: "300px",
            border: "1px dotted #ABABAB",
            borderRadius: "5px"
        };


        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <legend>Informations</legend>
                    <br />
                    <div>
                        <label htmlFor="title">Name</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                            style={styleInput}
                        />
                    </div>
                </form>

            </div >
        )
    }
}

export default ContactForm;