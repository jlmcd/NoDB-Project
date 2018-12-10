import React, { Component } from 'react'
import axios from 'axios'
import QuoteDisplayer from './QuoteDisplayer/QuoteDisplayer'
import './StudentInfo.css'

export default class StudentInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailInput: '',
            nameInput: '',
            quote: ''
        }
    }

    componentDidMount() {
        axios.get('/api/quotes')
            .then(res => {
                this.setState({
                    quote: res.data
                })
            })
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    email() {

    }



    render() {
        return (
            <div id="quote-and-student">
                <QuoteDisplayer quote={this.state.quote} /> 
                <div id="student-info">
                    <input
                        placeholder='Student Name'
                        onChange={(evt) => this.handleChange('nameInput', evt)}
                        value={this.state.nameInput}
                    />
                    <input
                        placeholder='Student Email'
                        onChange={(evt) => this.handleChange('emailInput', evt)}
                        value={this.state.emailInput}
                    />
                    <button>Email</button>
                </div>
            </div>
        )
    }
}