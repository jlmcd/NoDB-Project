import React, { Component } from 'react'
import './TaskCreator.css'

export default class TaskCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pieceInput: '',
            composerInput: '',
            tempoInput: '',
            notesInput: ''
        }
    }
    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    addNew() {
        let newItem = {
            piece: this.state.pieceInput,
            composer: this.state.composerInput,
            tempo: +this.state.tempoInput,
            notes: this.state.notesInput
        }
        this.props.addToList(newItem)
        this.setState({
            pieceInput: '',
            composerInput: '',
            tempoInput: '',
            notesInput: ''
        })
    }

    render() {
        return (
            <div id="task-creator">
                <input
                    id="piece-field"
                    type="text"
                    placeholder="Piece Name"
                    onChange={(evt) => this.handleChange('pieceInput', evt)}
                    value={this.state.pieceInput}
                />
                <input
                    id="composer-field"
                    type="text"
                    placeholder="Composer"
                    onChange={(evt) => this.handleChange('composerInput', evt)}
                    value={this.state.composerInput}
                />
                <input
                    id="tempo-field"
                    type="number"
                    min="10"
                    max="300"
                    placeholder="Tempo"
                    onChange={(evt) => this.handleChange('tempoInput', evt)}
                    value={this.state.tempoInput}
                />
                <textarea
                    id="notes-field"
                    type="text"
                    placeholder="Notes for Practice"
                    onChange={(evt) => this.handleChange('notesInput', evt)}
                    value={this.state.notesInput}
                />
                <button onClick={() => this.addNew()}>Add</button>
            </div>
        )
    }
}